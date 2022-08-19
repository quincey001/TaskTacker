class ActionDefaultAskAffirmation(Action):
    def name(self):
        return "action_default_ask_affirmation"
    def __init__(self) -> None:
        self.intent_mappings = INTENT
    async def run(self,
            dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: DomainDict
            ) -> Dict[Text, Any]:
        # select the top three intents from the tracker
        # ignore the first one -- nlu fallback  == tracker.latest_message["intent_ranking"][1:4]
        predicted_intents = tracker.latest_message["intent_ranking"][1:2]
        predict = []

        if predicted_intents[0]["confidence"] > 0.4:
                predict.append(predicted_intents[0])

        if len(predict) > 0:
            # A prompt asking the user to selectan option
            message = "I'm not sure I've understood you correctly 🤔 Do you mean..."
           # a mapping between intents and user friendly wordings
           # show the top three intents as buttons to the user
            buttons = [
                {
                    "title": self.intent_mappings[intent['name']],
                    "payload": "/{}".format(intent['name'])
                }
                for intent in predict
            ]
            # add a "none of these button", if the user doesn't
            # agree when any suggestion
            buttons.append({
                "title": "None of these",
                "payload": "/out_of_scope"
            })
            dispatcher.utter_message(text=message, buttons=buttons)
        else:
            dispatcher.utter_message(response="utter_default")
        return []
