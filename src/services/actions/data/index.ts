export enum DataActionType {
    INIT_DATA = 'INIT_DATA',
    NEXT_SENTENCE = 'NEXT_SENTENCE',
}

export type DataAction =
    | { type: DataActionType.INIT_DATA, sentences: string[] }
    | { type: DataActionType.NEXT_SENTENCE }