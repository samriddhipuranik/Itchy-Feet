#!/bin/bash
set -e
npm ci
CI=false npm run build