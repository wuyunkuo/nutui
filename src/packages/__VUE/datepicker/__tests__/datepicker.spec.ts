import { config, mount } from '@vue/test-utils';
import { nextTick, ref, toRefs, reactive, onMounted } from 'vue';
import NutIcon from '../../icon/index.vue';
import NutRange from '../../range/index.vue';
import DatePicker from '../../datepicker/index.vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutRange
  };
});

afterAll(() => {
  config.global.components = {};
});

test('Do not display Chinese', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1),
      visible: true,
      isWrapTeleport: false,
      isShowChinese: false
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-picker__confirm').exists()).toBeTruthy();
  const confirm = wrapper.find('.nut-picker__confirm');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([[2020, 1, 1]]);
});

test('min date & max date', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2022, 10, 1),
      visible: true,
      isWrapTeleport: false
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(3);
});

test('Increment step setting', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      type: 'time',
      minuteStep: 5,
      visible: true,
      isWrapTeleport: false
    }
  });
  await nextTick();
  const yearItem = wrapper.findAll('.nut-picker__list')[1].findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(12);
});
