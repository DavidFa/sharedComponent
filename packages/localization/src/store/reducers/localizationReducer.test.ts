import reducer from "./localizationReducers";
import { ActionType } from '../../models/Types';

describe('localizationReducer', () => {

    it('should handle "showFlyout"', () => {
        expect(reducer({
            isShowFlyout: false,
            flyOutField: "",
            name: {
                length: 20,
                tem: "",
                localization: {}
            },
            description: {
                length: 50,
                tem: "",
                localization: {}
            }
        }, {
            type: ActionType.showFlyout,
            payload: {
                flyOutField: "Name",
            }
        }))
            .toEqual({
                isShowFlyout: true,
                flyOutField: "Name",
                name: {
                    length: 20,
                    tem: "",
                    localization: {}
                },
                description: {
                    length: 50,
                    tem: "",
                    localization: {}
                }
            })
    })

    it('should handle "dissFlyout"', () => {
        expect(reducer({
            isShowFlyout: false,
            flyOutField: "Name",
            name: {
                length: 20,
                tem: "tem",
                localization: { "en-AU": "name test" }
            },
            description: {
                length: 50,
                tem: "desc tem",
                localization: {"en-AU": "desc test"}
            }
        }, {
            type: ActionType.dissFlyout,
            payload: {
                local: "en-AU",
            }
        }))
            .toEqual({
                isShowFlyout: false,
                flyOutField: "",
                name: {
                    length: 20,
                    tem: "name test",
                    localization: {"en-AU": "name test"}
                },
                description: {
                    length: 50,
                    tem: "desc test",
                    localization: {"en-AU": "desc test"}
                }
            })
    })

    it('should handle "updateName"', () => {
        expect(reducer({
            isShowFlyout: false,
            flyOutField: "",
            name: {
                length: 20,
                tem: "tem",
                localization: { "en-AU": "name test" }
            },
            description: {
                length: 50,
                tem: "desc tem",
                localization: {"en-AU": "desc test"}
            }
        }, {
            type: ActionType.updateName,
            payload: {
                local: "en-AU",
                field: "updated name"
            }
        }))
            .toEqual({
                isShowFlyout: false,
                flyOutField: "",
                name: {
                    length: 20,
                    tem: "updated name",
                    localization: {"en-AU": "updated name"}
                },
                description: {
                    length: 50,
                    tem: "desc tem",
                    localization: {"en-AU": "desc test"}
                }
            })
    })

    it('should handle "updateDesc"', () => {
        expect(reducer({
            isShowFlyout: false,
            flyOutField: "",
            name: {
                length: 20,
                tem: "tem",
                localization: { "en-AU": "name test" }
            },
            description: {
                length: 50,
                tem: "desc tem",
                localization: {"en-AU": "desc test"}
            }
        }, {
            type: ActionType.updateDesc,
            payload: {
                local: "en-AU",
                field: "updated desc"
            }
        }))
            .toEqual({
                isShowFlyout: false,
                flyOutField: "",
                name: {
                    length: 20,
                    tem: "tem",
                    localization: { "en-AU": "name test" }
                },
                description: {
                    length: 50,
                    tem: "updated desc",
                    localization: {"en-AU": "updated desc"}
                }
            })
    })

    it('should handle "updateFlyoutName"', () => {
        expect(reducer({
            isShowFlyout: false,
            flyOutField: "Name",
            name: {
                length: 20,
                tem: "tem",
                localization: { "en-AU": "name test" }
            },
            description: {
                length: 50,
                tem: "desc tem",
                localization: {"en-AU": "desc tem"}
            }
        }, {
            type: ActionType.updateFlyoutName,
            payload: {
                local: "en-AU",
                field: "updated name"
            }
        }))
            .toEqual({
                isShowFlyout: false,
                flyOutField: "Name",
                name: {
                    length: 20,
                    tem: "updated name",
                    localization: { "en-AU": "name test" }
                },
                description: {
                    length: 50,
                    tem: "desc tem",
                    localization: {"en-AU": "desc tem"}
                }
            })
    })

    it('should handle "updateFlyoutDesc"', () => {
        expect(reducer({
            isShowFlyout: false,
            flyOutField: "Description",
            name: {
                length: 20,
                tem: "tem",
                localization: { "en-AU": "name test" }
            },
            description: {
                length: 50,
                tem: "desc tem",
                localization: {"en-AU": "desc tem"}
            }
        }, {
            type: ActionType.updateFlyoutDesc,
            payload: {
                local: "en-AU",
                field: "updated desc"
            }
        }))
            .toEqual({
                isShowFlyout: false,
                flyOutField: "Description",
                name: {
                    length: 20,
                    tem: "tem",
                    localization: { "en-AU": "name test" }
                },
                description: {
                    length: 50,
                    tem: "updated desc",
                    localization: {"en-AU": "desc tem"}
                }
            })
    })

    it('should handle "updateNameSet"', () => {
        expect(reducer({
            isShowFlyout: true,
            flyOutField: "Name",
            name: {
                length: 20,
                tem: "en-AU test",
                localization: { "en-AU": "name test" }
            },
            description: {
                length: 50,
                tem: "desc tem",
                localization: {"en-AU": "desc tem"}
            }
        }, {
            type: ActionType.updateNameSet,
            payload: {
                local: "en-AU",
                localization: {"en":"en test", "en-UK":"en-UK test", "en-US":"en-US test"}
            }
        }))
            .toEqual({
                isShowFlyout: false,
                flyOutField: "",
                name: {
                    length: 20,
                    tem: "en-AU test",
                    localization: {"en-AU":"en-AU test", "en-UK":"en-UK test", "en-US":"en-US test", "en":"en test"}
                },
                description: {
                    length: 50,
                    tem: "desc tem",
                    localization: {"en-AU": "desc tem"}
                }
            })
    })

    it('should handle "updateDescSet"', () => {
        expect(reducer({
            isShowFlyout: true,
            flyOutField: "Description",
            name: {
                length: 20,
                tem: "en-AU test",
                localization: { "en-AU": "name test" }
            },
            description: {
                length: 50,
                tem: "en-AU test",
                localization: {"en-AU": "desc tem"}
            }
        }, {
            type: ActionType.updateDescSet,
            payload: {
                local: "en-AU",
                localization: {"en":"en test", "en-UK":"en-UK test", "en-US":"en-US test"}
            }
        }))
            .toEqual({
                isShowFlyout: false,
                flyOutField: "",
                name: {
                    length: 20,
                    tem: "en-AU test",
                    localization: { "en-AU": "name test" }
                },
                description: {
                    length: 50,
                    tem: "en-AU test",
                    localization: {"en-AU":"en-AU test", "en-UK":"en-UK test", "en-US":"en-US test", "en":"en test"}
                }
            })
    })
})