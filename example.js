// You can :make this file to see if the plugin works for you.
function foo() {
  throw new Error('bar');
}

setTimeout(foo, 1)
