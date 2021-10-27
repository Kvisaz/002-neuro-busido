import {DataAction, DataActionType} from "../../actions";
import {RandomUtils} from "../../utils/RandomUtils";

export interface IDataState {
    sentences: string[];
    lastSentenceIndex: number;
}

export const InitialDataState: IDataState = {
    sentences: [],
    lastSentenceIndex: 0,
};

export function dataReducer(state: IDataState = InitialDataState, action: DataAction): IDataState {
    switch (action.type) {
        case DataActionType.INIT_DATA:
            return {
                ...state,
                sentences: getPredefinedSentences()
            }
        case DataActionType.NEXT_SENTENCE:
            return {
                ...state,
                lastSentenceIndex: state.lastSentenceIndex + 1
            }
        default:
            return {
                ...state
            }
    }
}

/**
 * Чтобы это работало
 * надо включить в html скрипт data/sentences
 * все выражения 1 строковой константой
 */
interface SentencesWindow {
    SENTENCES?: string;
}

function getPredefinedSentences(): string[] {
    const {SENTENCES} = window as SentencesWindow;

    let sentences: string[] = [];

    if (SENTENCES) {
        sentences = SENTENCES.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        const currentMs = Date.now();
        sentences = RandomUtils.shuffleWithSeed(sentences, currentMs);

    }
    return sentences;
}