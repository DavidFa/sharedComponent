import { ActionType, MessageAction, MessageState, Status } from "../../models/Types";

const initialSate: MessageState = {
    loading: false,
    status: Status.init,
    message: "",
}

const loadingStart = (): MessageState => {
    return { status: Status.init, message: "", loading: true };
}

const loadingSuccess = (action: MessageAction): MessageState => {
    return { status: Status.success, message: action.payload.message!, loading: false };
}

const loadingFail = (action: MessageAction): MessageState => {
    return { status: Status.fail, message: action.payload.message!, loading: false };
}

const messageReducers = (state: MessageState = initialSate, action: MessageAction): MessageState => {
    switch (action.type) {
        case ActionType.loadingStart: {
            return loadingStart();
        }
        case ActionType.loadingSuccess: {
            return loadingSuccess(action);
        }
        case ActionType.loadingFail: {
            return loadingFail(action);
        }
    }
    return state;
}

export default messageReducers;