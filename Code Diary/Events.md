# Events

Event Type          |   Description
--------------------|--------------------
AnimationEvent      |   CSS Animations.
ChangeEvent         |   Changing the value of <input>, <select> and <textarea> element.
ClipboardEvent      |   Using copy, paste and cut events.
CompositionEvent    |   Events that occur due to the user indirectly entering text (e.g. depending on Browser and PC setup, a popup window may appear with additional characters if you e.g. want to type Japanese on a US Keyboard)
DragEvent	        |   Drag and drop interaction with a pointer device (e.g. mouse).
FocusEvent	        |   Event that occurs when elements gets or loses focus.
FormEvent	        |   Event that occurs whenever a form or form element gets/loses focus, a form element value is changed or the form is submitted.
InvalidEvent	    |   Fired when validity restrictions of an input fails (e.g <input type="number" max="10"> and someone would insert number 20).
KeyboardEvent	    |   User interaction with the keyboard. Each event describes a single key interaction.
MouseEvent	        |   Events that occur due to the user interacting with a pointing device (e.g. mouse)
PointerEvent	    |   Events that occur due to user interaction with a variety pointing of devices such as mouse, pen/stylus, a touchscreen and which also supports multi-touch. Unless you develop for older browsers (IE10 or Safari 12), pointer events are recommended. Extends UIEvent.
TouchEvent	        |   Events that occur due to the user interacting with a touch device. Extends UIEvent.
TransitionEvent	    |   CSS Transition. Not fully browser supported. Extends UIEvent
UIEvent	            |   Base Event for Mouse, Touch and Pointer events.
WheelEvent	        |   Scrolling on a mouse wheel or similar input device. (Note: wheel event should not be confused with the scroll event)
SyntheticEvent	    |   The base event for all above events. Should be used when unsure about event type