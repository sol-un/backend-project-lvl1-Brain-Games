#!/usr/bin/env node

import greetAndAskName from '../src/ask-name.js';
import playEvenOdd from '../src/index.js';

const userName = greetAndAskName();
playEvenOdd(userName);
