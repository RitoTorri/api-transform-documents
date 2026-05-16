import { TransformServices } from './transform.service.js';
import { TransformController } from './transform.controller.js';

const transformServices = new TransformServices();
const transformController = new TransformController();

export {
    transformServices,
    transformController
}