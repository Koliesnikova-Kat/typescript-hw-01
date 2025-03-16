// Union Type

let mixedType: string | number;

mixedType = 'Max';
mixedType = 21;
mixedType = true; // перевірка чи виникне помилка
mixedType = {}; // перевірка чи виникне помилка


// Literal Type

type enableOrDisable = 'enable' | 'disable';
let status: enableOrDisable;

status = 'enable';
status = 'disable';
status = 'unknown'; // перевірка чи виникне помилка
