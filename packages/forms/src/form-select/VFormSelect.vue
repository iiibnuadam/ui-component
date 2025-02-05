<script setup lang="ts">
import {toRefs, PropType, watch, computed} from 'vue';
import {useField} from 'vee-validate';
import type {VFormSelectItem} from './types';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  /**
   * @deprecated Use `modelValue` instead
   */
  value: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<VFormSelectItem[]>,
    default: () => [],
  },
  itemText: {
    type: String,
    default: 'text',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  name: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorClass: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  validationMode: {
    type: String as PropType<'aggressive' | 'eager'>,
    default: 'aggressive',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

const {
  modelValue,
  value,
  itemText,
  itemValue,
  error,
  name,
  disabled,
  rules,
  validationMode,
} = toRefs(props);

const isEagerValidation = computed(() => {
  return validationMode.value === 'eager';
});

const message = computed(() => {
  return errorMessage.value || props.errorMessages[0];
});

const {
  value: inputValue,
  errorMessage,
  validate,
} = useField(name, rules, {
  initialValue: value.value || modelValue.value,
  validateOnValueUpdate: !isEagerValidation.value,
});

watch(inputValue, (val) => {
  emit('update:modelValue', val);

  if (errorMessage.value && isEagerValidation.value) {
    validate();
  }
});

watch(modelValue, (val) => {
  inputValue.value = val;
});

const getValue = (option: string | Record<string, any>) => {
  return typeof option === 'string' ? option : option[itemValue.value];
};

const getText = (option: string | Record<string, any>) => {
  return typeof option === 'string' ? option : option[itemText.value];
};

const handleBlur = () => {
  if (isEagerValidation.value) {
    validate();
  }
};
</script>

<template>
  <div
    :class="[
      `v-input v-input--select`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
      },
      wrapperClass,
    ]"
  >
    <label v-if="label" :for="name" class="v-input-label" :class="labelClass">
      {{ label }}
    </label>
    <select
      v-model="inputValue"
      @blur="handleBlur"
      class="v-input-control"
      :disabled="disabled"
      v-bind="$attrs"
    >
      <option
        v-for="(option, index) in items"
        :key="index"
        v-bind="option"
        :value="getValue(option)"
      >
        {{ getText(option) }}
      </option>
    </select>
    <div v-if="message" class="v-input-error" :class="errorClass">
      {{ message }}
    </div>
  </div>
</template>

<style>
@import '../forms.css';
</style>
