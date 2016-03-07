'use strict';

import config from './config';
import api from './api';

const API = new api(config.API_ROOT);
export default API;
