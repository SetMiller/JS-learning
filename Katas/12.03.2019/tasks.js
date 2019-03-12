////////////////////////////////////////
// Интересные задачи для разбора
////////////////////////////////////////
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //
// // 1️⃣
let mon1 = { "type": "Roc",         "hitpoints": 40, "number": 6, "damage":8 };
let mon2 = { "type": "Unicorn",     "hitpoints": 40, "number": 4, "damage":13};
// let mon1 = { "type": "Titan",       "hitpoints": 300,"number": 1, "damage":50 };
// let mon2 = { "type": "Battle Dwarf","hitpoints": 20, "number": 25,"damage":4 };
// let mon1 = { "type": "Paladin",     "hitpoints": 50, "number": 8 , "damage":20};
// let mon2 = { "type": "Skeleton",    "hitpoints": 4 , "number": 100,"damage":3 };

// Мой вариант 😄😄😄
function whoWouldWin(mon1, mon2) {
  let hp1 = mon1["hitpoints"];
  let hp2 = mon2["hitpoints"];
  let totalHP1 = hp1 * mon1["number"];
  let totalHP2 = hp2 * mon2["number"];
  let atk1 = mon1["number"] * mon1["damage"];
  let atk2 = mon2["number"] * mon2["damage"];
  // TODO:определение итераций цикла необходимо сделать на основании входящих данных 
  for(i = 0; i <= 20; i++) {
    totalHP2 -= atk1;
    mon2["number"] = Math.ceil(totalHP2 / hp2);
    mon2["hitpoints"] = totalHP2 - (mon2["number"] - 1) * hp2;
    atk2 = mon2["number"] * mon2["damage"];
    if (totalHP2 <= 0) return `${mon1["number"]} ${mon1["type"]}(s) won`;
    
    totalHP1 -= atk2;
    mon1["number"] = Math.ceil(totalHP1 / hp1);
    mon1["hitpoints"] = totalHP1 - (mon1["number"] - 1) * hp1;
    atk1 = mon1["number"] * mon1["damage"];
    if (totalHP1 <= 0) return `${mon2["number"]} ${mon2["type"]}(s) won`;
  };
}