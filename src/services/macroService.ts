export interface Macro {
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
}

export interface MacroItem extends Macro {
  name: string;
}
