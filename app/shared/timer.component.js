System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TimerComponent = (function () {
                function TimerComponent() {
                    this.isRunning = false;
                }
                TimerComponent.prototype.toggleTimer = function () {
                    var _this = this;
                    if (!this.isRunning) {
                        this.interval = setInterval(function () {
                            _this.currentTime--;
                        }, 1000);
                    }
                    else {
                        clearInterval(this.interval);
                    }
                    this.isRunning = !this.isRunning;
                };
                TimerComponent.prototype.initTimer = function (time) {
                    clearInterval(this.interval);
                    this.isRunning = false;
                    this.currentTime = time;
                };
                TimerComponent.prototype.resetTimer = function () {
                    this.initTimer(this.startingTime);
                };
                TimerComponent.prototype.ngOnInit = function () {
                    this.currentTime = this.startingTime;
                    console.log(this.currentTime);
                };
                __decorate([
                    core_1.Input('starting-time'), 
                    __metadata('design:type', Number)
                ], TimerComponent.prototype, "startingTime", void 0);
                TimerComponent = __decorate([
                    core_1.Component({
                        selector: 'timer',
                        templateUrl: '/app/shared/timer.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimerComponent);
                return TimerComponent;
            }());
            exports_1("TimerComponent", TimerComponent);
        }
    }
});
//# sourceMappingURL=timer.component.js.map