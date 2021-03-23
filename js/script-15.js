class User {
  // Объявление и инициализация статического свойства
  static TYPES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
  #email;
  #type;
  constructor({ email, type }) {
    this.#email = email;
    this.#type = type;
  }
  get type() {
    return this.#type;
  }
  set type(newType) {
    if (User.TYPES[newType] === undefined) {
      console.log('Ошибка! Такого типа пользователя не существет');
      return;
    }
    // Error
    // this.#type = newType;
    this.#type = User.TYPES[newType];
  }
}
const mango = new User({
  email: 'mango@mail.com',
  type: User.TYPES.ADMIN,
});
console.log(mango.TYPES); // undefined
console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }
console.log(mango.type); // admin
// Error
// mango.type = User.TYPES.EDITOR;
mango.type = 'EDITOR';
console.log(mango.type); // editor