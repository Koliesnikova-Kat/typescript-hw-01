type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, 'name' | 'color'>,
  U extends Pick<AllType, 'position' | 'weight'>
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topData = {
  name: 'Alice',
  color: 'blue',
  position: 60,
  weight: 90,
};
const bottomData = {
  name: 'Bob',
  color: 'red',
  position: 42,
  weight: 70,
};

const result = compare(topData, bottomData);

console.log(result);
