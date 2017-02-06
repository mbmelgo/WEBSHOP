import Slingshot from './slingshot.js';
import initial_add from './initial_add.js';
import mail_service from './mail_service.js';

export default function () {
    Slingshot();
    initial_add();
    mail_service()
}
