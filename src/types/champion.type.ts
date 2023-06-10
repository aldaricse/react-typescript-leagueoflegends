export interface ChampionType {
  id: string,
  name: string,
  title: string,
  tags: string[],
}

export interface Spell {
  id: string,
  name: string,
  description: string
}

export interface Passive {
  name: string,
  image: {
    full: string
  },
  description: string
}

export interface ChampionDetailType {
  id: string,
  name: string,
  image: {
    full: string
  },
  title: string,
  tags: string[],
  blurb: string,
  lore: string,
  skins: {
    id: string,
    num: number,
    name: string
  }[],
  passive: Passive,
  spells: Spell[],
}