export class AppMenuItem {
    constructor(
        public name: string,
        public route: string,
        public items: AppMenuItem[] = []
    ){}
}
