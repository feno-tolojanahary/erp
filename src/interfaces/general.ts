
export interface Country {
    id: number,
    name: string,
    code: string
}

export type State = {
    id: number,
    stateName: string,
    stateCode: number,
    country: string
}

export type Item = {
    id: number,
    name: string
}