document.write("Running fine!")

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const file_service = require("node:fs");