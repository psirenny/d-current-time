function Component () {}

Component.prototype.view = __dirname;

Component.prototype.create = function () {
  var period = this.model.get('period') || 1000;
  this.timer = setInterval(this.tick.bind(this), period);
};

Component.prototype.tick = function () {
  this.model.set('path', new Date());
};

Component.prototype.destroy = function () {
  clearInterval(this.timer);
};

module.exports = Component;
