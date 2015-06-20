/**
 * Simple wrapper to proxy events from source on behalf
 * of the target.
 */
export default proxyEvents;

function proxyEvents(source, target, events) {
  for (var i = 0; i < events.length; ++i) {
    source.on(events[i], fireOnTarget(events[i]));
  }

  function fireOnTarget(eventName) {
    return function() {
      target.fire.apply(this, [eventName].concat(
        Array.prototype.slice.call(arguments)
      ));
    }
  }
}