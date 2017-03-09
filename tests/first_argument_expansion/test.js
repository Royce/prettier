setTimeout(function() {
  thing();
}, 500);

["a","b","c"].reduce(function(item, thing) {
  return thing + " " + item;
}, "letters:")

func(() => {
  thing();
}, identifier);

func(function() {
  thing();
}, this.props.timeout);

func((that) => {
  thing();
}, this);

func(() => {
  thing();
}, true);

func(() => {
  thing();
}, null);

func(() => {
  thing();
}, undefined);

func(() => {
  thing();
}, /regex.*?/);

reallyLongLongLongLongLongLongLongLongLongLongLongLongLongLongMethod((f, g, h) => {
  return f.pop();
}, true);

// Don't do the rest of these

func(function() {
  thing();
}, true, false);

func(() => {
  thing();
}, {yes: true, cats: 5});

func(function() {
  thing();
}, getTimeout());

func(() => {
  thing();
}, this.func().prop);

func(function() {
  thing();
}, this.props.getTimeout());

func(function() {
  thing();
}, this.props.timeout * 1000);

compose((a) => {
  return a.thing;
}, b => {
  return b + "";
});

renderThing(a =>
  <div>Content. So much to say. Oh my. Are we done yet?</div>
,args);

