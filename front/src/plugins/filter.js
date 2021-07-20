import Vue from 'vue';
import moment from 'moment';

Vue.filter('commonDate', (value) =>
  moment(value).format('YYYY.MM.DD, h:mm:ss a'),
);
