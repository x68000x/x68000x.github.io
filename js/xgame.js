// GAMEPAD


 var hasGP = false;
    var repGP;
 
    function canGame() {
        return "getGamepads" in navigator;
    }
 
    function reportOnGamepad() {
        var gp = navigator.getGamepads()[0];
        var html = "";
            html += "id: "+gp.id+"<br/>";
 
        for(var i=0;i<gp.buttons.length;i++) {
            html+= "Button "+(i+1)+": ";
            if(gp.buttons[i].pressed) html+= " pressed";
            html+= "<br/>";
            
            
       
            
        }
 
        for(var i=0;i<gp.axes.length; i+=2) {
            html+= "Stick "+(Math.ceil(i/2)+1)+": "+gp.axes[i]+","+gp.axes[i+1]+"<br/>";
        }
 
        $("#gamepadDisplay").html(html);
    }
 
    $(document).ready(function() {
 
        if(canGame()) {
 
            var prompt = "To begin using your gamepad, connect it and press any button!";
            $("#gamepadPrompt").text(prompt);
 
            $(window).on("gamepadconnected", function() {
                hasGP = true;
                $("#gamepadPrompt").html("Gamepad connected!");
                console.log("connection event");
                repGP = window.setInterval(reportOnGamepad,100);
            });
 
            $(window).on("gamepaddisconnected", function() {
                console.log("disconnection event");
                $("#gamepadPrompt").text(prompt);
                window.clearInterval(repGP);
            });
 
            //setup an interval for Chrome
            var checkGP = window.setInterval(function() {
                console.log('checkGP');
                if(navigator.getGamepads()[0]) {
                    if(!hasGP) $(window).trigger("gamepadconnected");
                    window.clearInterval(checkGP);
                }
            }, 500);
        }
 
    });






////////////////////////////////////////////////////////

// QUINTUS



var Quintus = function a(b) {
    var c = function(a, b, d) {
        return c.select(a, b, d)
    };
    c.select = function() {}, c.include = function(b) {
        return c._each(c._normalizeArg(b), function(b) {
            var d = a[b] || b;
            if (!c._isFunction(d)) throw "Invalid Module:" + b;
            d(c)
        }), c
    }, c._normalizeArg = function(a) {
        return c._isString(a) && (a = a.replace(/\s+/g, "").split(",")), c._isArray(a) || (a = [a]), a
    }, c._extend = function(a, b) {
        if (!b) return a;
        for (var c in b) a[c] = b[c];
        return a
    }, c._clone = function(a) {
        return c._extend({}, a)
    }, c._defaults = function(a, b) {
        if (!b) return a;
        for (var c in b) void 0 === a[c] && (a[c] = b[c]);
        return a
    }, c._has = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, c._isString = function(a) {
        return "string" == typeof a
    }, c._isNumber = function(a) {
        return "[object Number]" === Object.prototype.toString.call(a)
    }, c._isFunction = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }, c._isObject = function(a) {
        return "[object Object]" === Object.prototype.toString.call(a)
    }, c._isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }, c._isUndefined = function(a) {
        return void 0 === a
    }, c._popProperty = function(a, b) {
        var c = a[b];
        return delete a[b], c
    }, c._each = function(a, b, c) {
        if (null != a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length === +a.length)
            for (var d = 0, e = a.length; e > d; d++) b.call(c, a[d], d, a);
        else
            for (var f in a) b.call(c, a[f], f, a)
    }, c._invoke = function(a, b, c, d) {
        if (null != a)
            for (var e = 0, f = a.length; f > e; e++) a[e][b](c, d)
    }, c._detect = function(a, b, c, d, e) {
        var f;
        if (null != a) {
            if (a.length === +a.length) {
                for (var g = 0, h = a.length; h > g; g++)
                    if (f = b.call(c, a[g], g, d, e)) return f;
                return !1
            }
            for (var i in a)
                if (f = b.call(c, a[i], i, d, e)) return f;
            return !1
        }
    }, c._map = function(a, b, d) {
        var e = [];
        return null == a ? e : a.map ? a.map(b, d) : (c._each(a, function(a, c, f) {
            e[e.length] = b.call(d, a, c, f)
        }), a.length === +a.length && (e.length = a.length), e)
    }, c._uniq = function(a) {
        a = a.slice().sort();
        for (var b = [], c = null, d = 0; d < a.length; d++) void 0 !== a[d] && c !== a[d] && b.push(a[d]), c = a[d];
        return b
    }, c._shuffle = function(a) {
        var b, d = [];
        return c._each(a, function(a, c) {
            b = Math.floor(Math.random() * (c + 1)), d[c] = d[b], d[b] = a
        }), d
    }, c._keys = Object.keys || function(a) {
        if (c._isObject(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var d in a) c._has(a, d) && (b[b.length] = d);
        return b
    }, c._range = function(a, b, c) {
        c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a, a += c;
        return f
    };
    var d = 0;
    return c._uniqueId = function() {
            return d++
        }, c.options = {



// DATA PATHS


            imagePath: "images/",
            audioPath: "audio/",
            dataPath: "data/",
            audioSupported: ["mp3", "ogg"],
            sound: !0,
            frameTimeLimit: 500,
            autoFocus: !0
        }, b && c._extend(c.options, b), c.gameLoop = function(a) {
            return c.lastGameLoopFrame = (new Date).getTime(), c.loop = !0, c._loopFrame = 0, c.gameLoopCallbackWrapper = function() {
                var b = (new Date).getTime();
                c._loopFrame++, c.loop = window.requestAnimationFrame(c.gameLoopCallbackWrapper);
                var d = b - c.lastGameLoopFrame;
                d > c.options.frameTimeLimit && (d = c.options.frameTimeLimit), c.stats.begin(), a.apply(c, [d / 1e3]), c.stats.end(), c.lastGameLoopFrame = b
            }, window.requestAnimationFrame(c.gameLoopCallbackWrapper), c
        }, c.pauseGame = function() {
            c.loop && window.cancelAnimationFrame(c.loop), c.loop = null
        }, c.unpauseGame = function() {
            c.loop || (c.lastGameLoopFrame = (new Date).getTime(), c.loop = window.requestAnimationFrame(c.gameLoopCallbackWrapper))
        },
        function() {
            var a = !1,
                b = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/;
            c.Class = function() {}, c.Class.prototype.isA = function(a) {
                return this.className === a
            }, c.Class.extend = function(d, e, f) {
                function g(a, b) {
                    return function() {
                        var c = this._super;
                        this._super = i[a];
                        var d = b.apply(this, arguments);
                        return this._super = c, d
                    }
                }

                function h() {
                    !a && this.init && this.init.apply(this, arguments)
                }
                c._isString(d) || (f = e, e = d, d = null);
                var i = this.prototype,
                    j = this;
                a = !0;
                var k = new j;
                a = !1;
                for (var l in e) k[l] = "function" == typeof e[l] && "function" == typeof i[l] && b.test(e[l]) ? g(l, e[l]) : e[l];
                return h.prototype = k, h.prototype.constructor = h, h.extend = c.Class.extend, f && c._extend(h, f), d && (c[d] = h, h.prototype.className = d, h.className = d), h
            }
        }(), c.Class.extend("Evented", {
            on: function(a, b, d) {
                if (c._isArray(a) || -1 !== a.indexOf(",")) {
                    a = c._normalizeArg(a);
                    for (var e = 0; e < a.length; e++) this.on(a[e], b, d)
                } else d || (d = b, b = null), d || (d = a), c._isString(d) && (d = (b || this)[d]), this.listeners = this.listeners || {}, this.listeners[a] = this.listeners[a] || [], this.listeners[a].push([b || this, d]), b && (b.binds || (b.binds = []), b.binds.push([this, a, d]))
            },
            trigger: function(a, b) {
                if (this.listeners && this.listeners[a])
                    for (var c = 0, d = this.listeners[a].length; d > c; c++) {
                        var e = this.listeners[a][c];
                        e[1].call(e[0], b)
                    }
            },
            off: function(a, b, d) {
                if (b) {
                    c._isString(d) && b[d] && (d = b[d]);
                    var e = this.listeners && this.listeners[a];
                    if (e)
                        for (var f = e.length - 1; f >= 0; f--) e[f][0] === b && (d && d !== e[f][1] || this.listeners[a].splice(f, 1))
                } else this.listeners[a] && delete this.listeners[a]
            },
            debind: function() {
                if (this.binds)
                    for (var a = 0, b = this.binds.length; b > a; a++) {
                        var c = this.binds[a],
                            d = c[0],
                            e = c[1];
                        d.off(e, this)
                    }
            }
        }), c.components = {}, c.Evented.extend("Component", {
            init: function(a) {
                this.entity = a, this.extend && c._extend(a, this.extend), a[this.name] = this, a.activeComponents.push(this.componentName), a.stage && a.stage.addToList && a.stage.addToList(this.componentName, a), this.added && this.added()
            },
            destroy: function() {
                if (this.extend)
                    for (var a = c._keys(this.extend), b = 0, d = a.length; d > b; b++) delete this.entity[a[b]];
                delete this.entity[this.name];
                var e = this.entity.activeComponents.indexOf(this.componentName); - 1 !== e && (this.entity.activeComponents.splice(e, 1), this.entity.stage && this.entity.stage.addToList && this.entity.stage.addToLists(this.componentName, this.entity)), this.debind(), this.destroyed && this.destroyed()
            }
        }), c.Evented.extend("GameObject", {
            has: function(a) {
                return this[a] ? !0 : !1
            },
            add: function(a) {
                a = c._normalizeArg(a), this.activeComponents || (this.activeComponents = []);
                for (var b = 0, d = a.length; d > b; b++) {
                    var e = a[b],
                        f = c.components[e];
                    if (!this.has(e) && f) {
                        var g = new f(this);
                        this.trigger("addComponent", g)
                    }
                }
                return this
            },
            del: function(a) {
                a = c._normalizeArg(a);
                for (var b = 0, d = a.length; d > b; b++) {
                    var e = a[b];
                    e && this.has(e) && (this.trigger("delComponent", this[e]), this[e].destroy())
                }
                return this
            },
            destroy: function() {
                this.isDestroyed || (this.trigger("destroyed"), this.debind(), this.stage && this.stage.remove && this.stage.remove(this), this.isDestroyed = !0, this.destroyed && this.destroyed())
            }
        }), c.component = function(a, b) {
            return b ? (b.name = a, b.componentName = "." + a, c.components[a] = c.Component.extend(a + "Component", b)) : c.components[a]
        }, c.GameObject.extend("GameState", {
            init: function(a) {
                this.p = c._extend({}, a), this.listeners = {}
            },
            reset: function(a) {
                this.init(a), this.trigger("reset")
            },
            _triggerProperty: function(a, b) {
                this.p[b] !== a && (this.p[b] = a, this.trigger("change." + b, a))
            },
            set: function(a, b) {
                c._isObject(a) ? c._each(a, this._triggerProperty, this) : this._triggerProperty(b, a), this.trigger("change")
            },
            inc: function(a, b) {
                this.set(a, this.get(a) + b)
            },
            dec: function(a, b) {
                this.set(a, this.get(a) - b)
            },
            get: function(a) {
                return this.p[a]
            }
        }), c.state = new c.GameState, c.reset = function() {
            c.state.reset()
        }, c.touchDevice = "ontouchstart" in document, c.setup = function(a, b) {
            c._isObject(a) && (b = a, a = null), b = b || {}, a = a || "quintus", c.el = c._isString(a) ? document.getElementById(a) : a, c.el || (c.el = document.createElement("canvas"), c.el.width = b.width || 320, c.el.height = b.height || 420, c.el.id = a, document.body.appendChild(c.el));
            var d = parseInt(c.el.width, 10),
                e = parseInt(c.el.height, 10),
                f = b.maxWidth || 5e3,
                g = b.maxHeight || 5e3,
                h = b.resampleWidth,
                i = b.resampleHeight,
                j = b.upsampleWidth,
                k = b.upsampleHeight;
            b.maximize === !0 || c.touchDevice && "touch" === b.maximize ? (document.body.style.padding = 0, document.body.style.margin = 0, d = b.width || Math.min(window.innerWidth, f) - (b.pagescroll ? 17 : 0), e = b.height || Math.min(window.innerHeight - 5, g), c.touchDevice && (c.el.style.height = 2 * e + "px", window.scrollTo(0, 1), d = Math.min(window.innerWidth, f), e = Math.min(window.innerHeight, g))) : c.touchDevice && window.scrollTo(0, 1), j && j >= d || k && k >= e ? (c.el.style.height = e + "px", c.el.style.width = d + "px", c.el.width = 2 * d, c.el.height = 2 * e) : (h && d > h || i && e > i) && c.touchDevice ? (c.el.style.height = e + "px", c.el.style.width = d + "px", c.el.width = d / 2, c.el.height = e / 2) : (c.el.style.height = e + "px", c.el.style.width = d + "px", c.el.width = d, c.el.height = e);
            var l = c.el.parentNode;
            return l && (c.wrapper = document.createElement("div"), c.wrapper.id = c.el.id + "_container", c.wrapper.style.width = d + "px", c.wrapper.style.margin = "0 auto", c.wrapper.style.position = "relative", l.insertBefore(c.wrapper, c.el), c.wrapper.appendChild(c.el)), c.el.style.position = "relative", c.ctx = c.el.getContext && c.el.getContext("2d"), c.width = parseInt(c.el.width, 10), c.height = parseInt(c.el.height, 10), c.cssWidth = d, c.cssHeight = e, window.addEventListener("orientationchange", function() {
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 0)
            }), c
        }, c.clear = function() {
            c.clearColor ? (c.ctx.globalAlpha = 1, c.ctx.fillStyle = c.clearColor, c.ctx.fillRect(0, 0, c.width, c.height)) : c.ctx.clearRect(0, 0, c.width, c.height)
        }, c.setImageSmoothing = function(a) {
            c.ctx.mozImageSmoothingEnabled = a, c.ctx.webkitImageSmoothingEnabled = a, c.ctx.msImageSmoothingEnabled = a, c.ctx.imageSmoothingEnabled = a
        }, c.imageData = function(a) {
            var b = document.createElement("canvas");
            b.width = a.width, b.height = a.height;
            var c = b.getContext("2d");
            return c.drawImage(a, 0, 0), c.getImageData(0, 0, a.width, a.height)
        }, c.assetTypes = {
            png: "Image",
            jpg: "Image",
            gif: "Image",
            jpeg: "Image",
            ogg: "Audio",
            wav: "Audio",
            m4a: "Audio",
            mp3: "Audio"
        }, c._fileExtension = function(a) {
            var b = a.split("."),
                c = b[b.length - 1].toLowerCase();
            return c
        }, c.assetType = function(a) {
            var b = c._fileExtension(a),
                d = c.assetTypes[b];
            return d || "Other"
        }, c.assetUrl = function(a, b) {
            var d = "";
            return c.options.development && (d = (/\?/.test(b) ? "&" : "?") + "_t=" + (new Date).getTime()), /^https?:\/\//.test(b) || "/" === b[0] ? b + d : a + b + d
        }, c.loadAssetImage = function(a, b, d, e) {
            var f = new Image;
            f.onload = function() {
                d(a, f)
            }, f.onerror = e, f.src = c.assetUrl(c.options.imagePath, b)
        }, c.audioMimeTypes = {
            mp3: "audio/mpeg",
            ogg: 'audio/ogg; codecs="vorbis"',
            m4a: "audio/m4a",
            wav: "audio/wav"
        }, c._audioAssetExtension = function() {
            if (c._audioAssetPreferredExtension) return c._audioAssetPreferredExtension;
            var a = new Audio;
            return c._audioAssetPreferredExtension = c._detect(c.options.audioSupported, function(b) {
                return a.canPlayType(c.audioMimeTypes[b]) ? b : null
            })
        }, c.loadAssetAudio = function(a, b, d) {
            var e = c._removeExtension(b),
                f = c._audioAssetExtension(),
                b = c.assetUrl(c.options.audioPath, e + "." + f),
                g = new Howl({
                    urls: [b],
                    onload: function() {
                        d(a, g)
                    }
                })
        }, c.loadAssetWebAudio = function(a, b, d, e) {
            var f = new XMLHttpRequest,
                g = c._removeExtension(b),
                h = c._audioAssetExtension();
            f.open("GET", c.assetUrl(c.options.audioPath, g + "." + h), !0), f.responseType = "arraybuffer", f.onload = function() {
                f.response;
                c.audioContext.decodeAudioData(f.response, function(b) {
                    d(a, b)
                }, e)
            }, f.send()
        }, c.loadAssetOther = function(a, b, d, e) {
            var f = new XMLHttpRequest,
                g = b.split("."),
                h = g[g.length - 1].toLowerCase();
            f.onreadystatechange = function() {
                4 === f.readyState && (200 === f.status ? "json" === h ? d(a, JSON.parse(f.responseText)) : d(a, f.responseText) : e())
            }, f.open("GET", c.assetUrl(c.options.dataPath, b), !0), f.send(null)
        }, c._removeExtension = function(a) {
            return a.replace(/\.(\w{3,4})$/, "")
        }, c.assets = {}, c.asset = function(a) {
            return c.assets[a]
        }, c.load = function(a, b, d) {
            var e = {};
            d || (d = {});
            var f = d.progressCallback,
                g = !1,
                h = function(a) {
                    g = !0, (d.errorCallback || function(a) {
                        throw "Error Loading: " + a
                    })(a)
                };
            c._isString(a) && (a = c._normalizeArg(a)), c._isArray(a) ? c._each(a, function(a) {
                c._isObject(a) ? c._extend(e, a) : e[a] = a
            }) : e = a;
            var i = c._keys(e).length,
                j = i,
                k = function(a, d, e) {
                    g || ((!c.assets[a] || e) && (c.assets[a] = d, j--, f && f(i - j, i)), 0 === j && b && b.apply(c))
                };
            c._each(e, function(a, b) {
                var d = c.assetType(a);
                c.assets[b] ? k(b, c.assets[b], !0) : c["loadAsset" + d](b, a, k, function() {
                    h(a)
                })
            })
        }, c.preloads = [], c.preload = function(a, b) {
            c._isFunction(a) ? (c.load(c._uniq(c.preloads), a, b), c.preloads = []) : c.preloads = c.preloads.concat(a)
        }, c.matrices2d = [], c.matrix2d = function() {
            return c.matrices2d.length > 0 ? c.matrices2d.pop().identity() : new c.Matrix2D
        }, c.Matrix2D = c.Class.extend({
            init: function(a) {
                a ? (this.m = [], this.clone(a)) : this.m = [1, 0, 0, 0, 1, 0]
            },
            identity: function() {
                var a = this.m;
                return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, this
            },
            clone: function(a) {
                var b = this.m,
                    c = a.m;
                return b[0] = c[0], b[1] = c[1], b[2] = c[2], b[3] = c[3], b[4] = c[4], b[5] = c[5], this
            },
            multiply: function(a) {
                var b = this.m,
                    c = a.m,
                    d = b[0] * c[0] + b[1] * c[3],
                    e = b[0] * c[1] + b[1] * c[4],
                    f = b[0] * c[2] + b[1] * c[5] + b[2],
                    g = b[3] * c[0] + b[4] * c[3],
                    h = b[3] * c[1] + b[4] * c[4],
                    i = b[3] * c[2] + b[4] * c[5] + b[5];
                return b[0] = d, b[1] = e, b[2] = f, b[3] = g, b[4] = h, b[5] = i, this
            },
            rotate: function(a) {
                if (0 === a) return this;
                var b = Math.cos(a),
                    c = Math.sin(a),
                    d = this.m,
                    e = d[0] * b + d[1] * c,
                    f = d[0] * -c + d[1] * b,
                    g = d[3] * b + d[4] * c,
                    h = d[3] * -c + d[4] * b;
                return d[0] = e, d[1] = f, d[3] = g, d[4] = h, this
            },
            rotateDeg: function(a) {
                return 0 === a ? this : this.rotate(Math.PI * a / 180)
            },
            scale: function(a, b) {
                var c = this.m;
                return void 0 === b && (b = a), c[0] *= a, c[1] *= b, c[3] *= a, c[4] *= b, this
            },
            translate: function(a, b) {
                var c = this.m;
                return c[2] += c[0] * a + c[1] * b, c[5] += c[3] * a + c[4] * b, this
            },
            transform: function(a, b) {
                return [a * this.m[0] + b * this.m[1] + this.m[2], a * this.m[3] + b * this.m[4] + this.m[5]]
            },
            transformPt: function(a) {
                var b = a.x,
                    c = a.y;
                return a.x = b * this.m[0] + c * this.m[1] + this.m[2], a.y = b * this.m[3] + c * this.m[4] + this.m[5], a
            },
            transformArr: function(a, b) {
                var c = a[0],
                    d = a[1];
                return b[0] = c * this.m[0] + d * this.m[1] + this.m[2], b[1] = c * this.m[3] + d * this.m[4] + this.m[5], b
            },
            transformX: function(a, b) {
                return a * this.m[0] + b * this.m[1] + this.m[2]
            },
            transformY: function(a, b) {
                return a * this.m[3] + b * this.m[4] + this.m[5]
            },
            release: function() {
                return c.matrices2d.push(this), null
            },
            setContextTransform: function(a) {
                var b = this.m;
                a.transform(b[0], b[3], b[1], b[4], b[2], b[5])
            }
        }), c
};
! function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
        var c = (new Date).getTime(),
            d = Math.max(0, 16 - (c - a)),
            e = window.setTimeout(function() {
                b(c + d)
            }, d);
        return a = c + d, e
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    })
}(), Quintus["2D"] = function(a) {
    a.component("viewport", {
        added: function() {
            this.entity.on("prerender", this, "prerender"), this.entity.on("render", this, "postrender"), this.x = 0, this.y = 0, this.offsetX = 0, this.offsetY = 0, this.centerX = a.width / 2, this.centerY = a.height / 2, this.scale = 1
        },
        extend: {
            follow: function(a, b, c) {
                this.off("poststep", this.viewport, "follow"), this.viewport.directions = b || {
                    x: !0,
                    y: !0
                }, this.viewport.following = a, this.viewport.boundingBox = c, this.on("poststep", this.viewport, "follow"), this.viewport.follow(!0)
            },
            unfollow: function() {
                this.off("poststep", this.viewport, "follow")
            },
            centerOn: function(a, b) {
                this.viewport.centerOn(a, b)
            },
            moveTo: function(a, b) {
                return this.viewport.moveTo(a, b)
            }
        },
        follow: function(b) {
            var c = a._isFunction(this.directions.x) ? this.directions.x(this.following) : this.directions.x,
                d = a._isFunction(this.directions.y) ? this.directions.y(this.following) : this.directions.y;
            this[b === !0 ? "centerOn" : "softCenterOn"](c ? this.following.p.x + this.following.p.w / 2 - this.offsetX : void 0, d ? this.following.p.y + this.following.p.h / 2 - this.offsetY : void 0)
        },
        offset: function(a, b) {
            this.offsetX = a, this.offsetY = b
        },
        softCenterOn: function(b, c) {
            if (void 0 !== b) {
                var d = (b - a.width / 2 / this.scale - this.x) / 3;
                this.boundingBox ? this.x + d < this.boundingBox.minX ? this.x = this.boundingBox.minX / this.scale : this.x + d > (this.boundingBox.maxX - a.width) / this.scale ? this.x = (this.boundingBox.maxX - a.width) / this.scale : this.x += d : this.x += d
            }
            if (void 0 !== c) {
                var e = (c - a.height / 2 / this.scale - this.y) / 3;
                this.boundingBox ? this.y + e < this.boundingBox.minY ? this.y = this.boundingBox.minY / this.scale : this.y + e > (this.boundingBox.maxY - a.height) / this.scale ? this.y = (this.boundingBox.maxY - a.height) / this.scale : this.y += e : this.y += e
            }
        },
        centerOn: function(b, c) {
            void 0 !== b && (this.x = b - a.width / 2 / this.scale), void 0 !== c && (this.y = c - a.height / 2 / this.scale)
        },
        moveTo: function(a, b) {
            return void 0 !== a && (this.x = a), void 0 !== b && (this.y = b), this.entity
        },
        prerender: function() {
            this.centerX = this.x + a.width / 2 / this.scale, this.centerY = this.y + a.height / 2 / this.scale, a.ctx.save(), a.ctx.translate(Math.floor(a.width / 2), Math.floor(a.height / 2)), a.ctx.scale(this.scale, this.scale), a.ctx.translate(-Math.floor(this.centerX), -Math.floor(this.centerY))
        },
        postrender: function() {
            a.ctx.restore()
        }
    }), a.TileLayer = a.Sprite.extend({
        init: function(a) {
            this._super(a, {
                tileW: 32,
                tileH: 32,
                blockTileW: 10,
                blockTileH: 10,
                type: 1,
                layerIndex: 0,
                renderAlways: !0
            }), this.p.dataAsset && this.load(this.p.dataAsset), this.blocks = [], this.p.blockW = this.p.tileW * this.p.blockTileW, this.p.blockH = this.p.tileH * this.p.blockTileH, this.colBounds = {}, this.directions = ["top", "left", "right", "bottom"], this.collisionObject = {
                p: {
                    w: this.p.tileW,
                    h: this.p.tileH,
                    cx: this.p.tileW / 2,
                    cy: this.p.tileH / 2
                }
            }, this.collisionNormal = {
                separate: []
            }
        },
        load: function(b) {
            var c, d = b.split("."),
                e = d[d.length - 1].toLowerCase();
            if ("json" === e) c = a._isString(b) ? a.asset(b) : b;
            else {
                if ("tmx" !== e && "xml" !== e) throw "file type not supported";
                var f = new DOMParser,
                    g = f.parseFromString(a.asset(b), "application/xml"),
                    h = g.getElementsByTagName("layer")[this.p.layerIndex],
                    i = parseInt(h.getAttribute("width"), 10),
                    j = parseInt(h.getAttribute("height"), 10),
                    k = h.getElementsByTagName("tile"),
                    l = 0;
                c = [];
                for (var m = 0; j > m; m++) {
                    c[m] = [];
                    for (var n = 0; i > n; n++) {
                        var o = k[l];
                        c[m].push(parseInt(o.getAttribute("gid") - 1, 10)), l++
                    }
                }
                this.p.objects = g.getElementsByTagName("object")
            }
            this.p.tiles = c, this.p.rows = c.length, this.p.cols = c[0].length, this.p.w = this.p.cols * this.p.tileW, this.p.h = this.p.rows * this.p.tileH
        },



//  EXPLAIN WHAT addObjectsToStage does and what the var are for because they are different for different levels


        addObjectsToStage: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m = this.p.objects,
                n = m.length,
                o = 0,
                p = !1;
            for ("undefined" != typeof b && "undefined" != typeof b.skip && (o = b.skip.length), c = 0; n > c; c++) {
                for (d = m[c].getAttribute("name"), d = d.charAt(0).toUpperCase() + d.slice(1), e = m[c].getAttribute("x"), f = m[c].getAttribute("y"), l = 0; o > l; l++) b.skip[l] == d && (p = !0);
                if (p) p = !1;
                else {
                    for (h = m[c].getElementsByTagName("property"), i = h.length, j = {}, g = 0; i > g; g++) j[h[g].getAttribute("name")] = h[g].getAttribute("value");
                    "Player" !== d && (k = a._extend({
                        x: parseInt(e, 10) + this.p.tileW / 2,
                        y: parseInt(f, 10) + this.p.tileH / 2
                    }, j), this.stage.insert(new a[d](k)))
                }
            }
        },
        getTile: function(a, b) {
            return this.p.tiles[b] && this.p.tiles[b][a]
        },
        setTile: function(a, b, c) {
            var d = this.p,
                e = Math.floor(a / d.blockTileW),
                f = Math.floor(b / d.blockTileH);
            e >= 0 && f >= 0 && e < this.p.cols && f < this.p.cols && (this.p.tiles[b][a] = c, this.blocks[f] && (this.blocks[f][e] = null))
        },
        tilePresent: function(a, b) {
            return this.p.tiles[b] && this.collidableTile(this.p.tiles[b][a])
        },
        drawableTile: function(a) {
            return a >= 0
        },
        collidableTile: function(a) {
            return a >= 0
        },
        collide: function(b) {
            var c, d = this.p,
                e = Math.floor((b.p.x - b.p.cx - d.x) / d.tileW),
                f = Math.floor((b.p.y - b.p.cy - d.y) / d.tileH),
                g = Math.ceil((b.p.x - b.p.cx + b.p.w - d.x) / d.tileW),
                h = Math.ceil((b.p.y - b.p.cy + b.p.h - d.y) / d.tileH),
                i = this.collisionObject,
                j = this.collisionNormal;
            j.collided = !1;
            for (var k = f; h >= k; k++)
                for (var l = e; g >= l; l++) this.tilePresent(l, k) && (i.p.x = l * d.tileW + d.x + d.tileW / 2, i.p.y = k * d.tileH + d.y + d.tileH / 2, c = a.collision(b, i), c && c.magnitude > 0 && (!j.collided || j.magnitude < c.magnitude) && (j.collided = !0, j.separate[0] = c.separate[0], j.separate[1] = c.separate[1], j.magnitude = c.magnitude, j.distance = c.distance, j.normalX = c.normalX, j.normalY = c.normalY, j.tileX = l, j.tileY = k, j.tile = this.getTile(l, k)));
            return j.collided ? j : !1
        },
        prerenderBlock: function(a, b) {
            var c = this.p,
                d = c.tiles,
                e = this.sheet(),
                f = a * c.blockTileW,
                g = b * c.blockTileH;
            if (!(0 > f || f >= this.p.cols || 0 > g || g >= this.p.rows)) {
                var h = document.createElement("canvas"),
                    i = h.getContext("2d");
                h.width = c.blockW, h.height = c.blockH, this.blocks[b] = this.blocks[b] || {}, this.blocks[b][a] = h;
                for (var j = 0; j < c.blockTileH; j++)
                    if (d[j + g])
                        for (var k = 0; k < c.blockTileW; k++) this.drawableTile(d[j + g][k + f]) && e.draw(i, k * c.tileW, j * c.tileH, d[j + g][k + f])
            }
        },
        drawBlock: function(a, b, c) {
            var d = this.p,
                e = Math.floor(b * d.blockW + d.x),
                f = Math.floor(c * d.blockH + d.y);
            this.blocks[c] && this.blocks[c][b] || this.prerenderBlock(b, c), this.blocks[c] && this.blocks[c][b] && a.drawImage(this.blocks[c][b], e, f)
        },
        draw: function(b) {
            for (var c = this.p, d = this.stage.viewport, e = d ? d.scale : 1, f = d ? d.x : 0, g = d ? d.y : 0, h = a.width / e, i = a.height / e, j = Math.floor((f - c.x) / c.blockW), k = Math.floor((g - c.y) / c.blockH), l = Math.floor((f + h - c.x) / c.blockW), m = Math.floor((g + i - c.y) / c.blockH), n = k; m >= n; n++)
                for (var o = j; l >= o; o++) this.drawBlock(b, o, n)
        }




// GRAVITY

    }), a.gravityY = 8.3 * 100, a.gravityX = 0, a.component("2d", {
        added: function() {
            var b = this.entity;
            a._defaults(b.p, {
                vx: 0,
                vy: 0,
                ax: 0,
                ay: 0,
                gravity: 1.24,
                collisionMask: a.SPRITE_DEFAULT
            }), b.on("step", this, "step"), b.on("hit", this, "collision")
        },
        collision: function(a) {
            var b = this.entity,
                c = b.p;
            if (a.obj.p && a.obj.p.sensor) return a.obj.trigger("sensor", b), void 0;
            a.impact = 0;
            var d = Math.abs(c.vx),
                e = Math.abs(c.vy);
            c.x -= a.separate[0], c.y -= a.separate[1], a.normalY < -.3 && (c.vy > 0 && (c.vy = 0), a.impact = e, b.trigger("bump.bottom", a)), a.normalY > .3 && (c.vy < 0 && (c.vy = 0), a.impact = e, b.trigger("bump.top", a)), a.normalX < -.3 && (c.vx > 0 && (c.vx = 0), a.impact = d, b.trigger("bump.right", a)), a.normalX > .3 && (c.vx < 0 && (c.vx = 0), a.impact = d, b.trigger("bump.left", a))
        },
        step: function(b) {
            for (var c = this.entity.p, d = b; d > 0;) b = Math.min(1 / 30, d), c.vx += c.ax * b + (void 0 === c.gravityX ? a.gravityX : c.gravityX) * b * c.gravity, c.vy += c.ay * b + (void 0 === c.gravityY ? a.gravityY : c.gravityY) * b * c.gravity, c.x += c.vx * b, c.y += c.vy * b, this.entity.stage.collide(this.entity), d -= b
        }
    }), a.component("aiBounce", {
        added: function() {
            this.entity.on("bump.right", this, "goLeft"), this.entity.on("bump.left", this, "goRight")
        },
        goLeft: function(a) {
            this.entity.p.vx = -a.impact, this.entity.p.flip = "right" === this.entity.p.defaultDirection ? "x" : !1
        },
        goRight: function(a) {
            this.entity.p.vx = a.impact, this.entity.p.flip = "left" === this.entity.p.defaultDirection ? "x" : !1
        }
    })
}, Quintus.Anim = function(a) {
    a._animations = {}, a.animations = function(b, c) {
        a._animations[b] || (a._animations[b] = {}), a._extend(a._animations[b], c)
    }, a.animation = function(b, c) {
        return a._animations[b] && a._animations[b][c]
    }, a.component("animation", {
        added: function() {
            var a = this.entity.p;
            a.animation = null, a.animationPriority = -1, a.animationFrame = 0, a.animationTime = 0, this.entity.on("step", this, "step")
        },
        extend: {
            play: function(a, b, c) {
                this.animation.play(a, b, c)
            }
        },
        step: function(b) {
            var c = this.entity,
                d = c.p;
            if (d.animation) {
                var e = a.animation(d.sprite, d.animation),
                    f = e.rate || d.rate,
                    g = 0;
                if (d.animationTime += b, d.animationChanged ? d.animationChanged = !1 : (d.animationTime += b, d.animationTime > f && (g = Math.floor(d.animationTime / f), d.animationTime -= g * f, d.animationFrame += g)), g > 0) {
                    if (d.animationFrame >= e.frames.length) {
                        if (e.loop === !1 || e.next) return d.animationFrame = e.frames.length - 1, c.trigger("animEnd"), c.trigger("animEnd." + d.animation), d.animation = null, d.animationPriority = -1, e.trigger && c.trigger(e.trigger, e.triggerData), e.next && this.play(e.next, e.nextPriority), void 0;
                        c.trigger("animLoop"), c.trigger("animLoop." + d.animation), d.animationFrame = d.animationFrame % e.frames.length
                    }
                    c.trigger("animFrame")
                }
                d.sheet = e.sheet || d.sheet, d.frame = e.frames[d.animationFrame], e.hasOwnProperty("flip") && (d.flip = e.flip)
            }
        },
        play: function(a, b, c) {
            var d = this.entity,
                e = d.p;
            b = b || 0, a !== e.animation && b >= e.animationPriority && (void 0 === c && (c = !0), e.animation = a, c && (e.animationChanged = !0, e.animationTime = 0, e.animationFrame = 0), e.animationPriority = b, d.trigger("anim"), d.trigger("anim." + e.animation))
        }
    }), a.Sprite.extend("Repeater", {
        init: function(b) {
            this._super(a._defaults(b, {
                speedX: 1,
                speedY: 1,
                repeatY: !0,
                repeatX: !0,
                renderAlways: !0,
                type: 0
            })), this.p.repeatW = this.p.repeatW || this.p.w, this.p.repeatH = this.p.repeatH || this.p.h
        },
        draw: function(b) {
            var c, d, e, f = this.p,
                g = this.asset(),
                h = this.sheet(),
                i = this.stage.viewport ? this.stage.viewport.scale : 1,
                j = Math.floor(this.stage.viewport ? this.stage.viewport.x : 0),
                k = Math.floor(this.stage.viewport ? this.stage.viewport.y : 0),
                l = Math.floor(f.x + j * this.p.speedX),
                m = Math.floor(f.y + k * this.p.speedY);
            for (f.repeatX ? (c = -l % f.repeatW, c > 0 && (c -= f.repeatW)) : c = f.x - j, f.repeatY ? (d = -m % f.repeatH, d > 0 && (d -= f.repeatH)) : d = f.y - k, e = c; d < a.height / i;) {
                for (c = e; c < a.width / i && (h ? h.draw(b, c + j, d + k, f.frame) : b.drawImage(g, c + j, d + k), c += f.repeatW, f.repeatX););
                if (d += f.repeatH, !f.repeatY) break
            }
        }
    }), a.Tween = a.Class.extend({
        init: function(b, c, d, e, f) {
            a._isObject(e) && (f = e, e = a.Easing.Linear), a._isObject(d) && (f = d, d = 1), this.entity = b, this.duration = d || 1, this.time = 0, this.options = f || {}, this.delay = this.options.delay || 0, this.easing = e || this.options.easing || a.Easing.Linear, this.startFrame = a._loopFrame + 1, this.properties = c, this.start = {}, this.diff = {}
        },
        step: function(b) {
            var c;
            if (this.startFrame > a._loopFrame) return !0;
            if (this.delay >= b) return this.delay -= b, !0;
            if (this.delay > 0 && (b -= this.delay, this.delay = 0), 0 === this.time) {
                var d = this.entity,
                    e = this.properties;
                this.p = d instanceof a.Stage ? d.viewport : d.p;
                for (c in e) this.start[c] = this.p[c], a._isUndefined(this.start[c]) || (this.diff[c] = e[c] - this.start[c])
            }
            this.time += b;
            var f = Math.min(1, this.time / this.duration),
                g = this.easing(f);
            for (c in this.start) a._isUndefined(this.p[c]) || (this.p[c] = this.start[c] + this.diff[c] * g);
            return f >= 1 && this.options.callback && this.options.callback.apply(this.entity), 1 > f
        }
    }), a.Easing = {
        Linear: function(a) {
            return a
        },
        Quadratic: {
            In: function(a) {
                return a * a
            },
            Out: function(a) {
                return a * (2 - a)
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
            }
        }
    }, a.component("tween", {
        added: function() {
            this._tweens = [], this.entity.on("step", this, "step")
        },
        extend: {
            animate: function(b, c, d, e) {
                return this.tween._tweens.push(new a.Tween(this, b, c, d, e)), this
            },
            chain: function(b, c, d, e) {
                a._isObject(d) && (e = d, d = a.Easing.Linear);
                var f = this.tween._tweens.length;
                if (f > 0) {
                    var g = this.tween._tweens[f - 1];
                    e = e || {}, e.delay = g.duration - g.time + g.delay
                }
                return this.animate(b, c, d, e), this
            },
            stop: function() {
                return this.tween._tweens.length = 0, this
            }
        },
        step: function(a) {
            for (var b = 0; b < this._tweens.length; b++) this._tweens[b].step(a) || (this._tweens.splice(b, 1), b--)
        }
    })
}, Quintus.Audio = function(a) {
    a.audio = {
        channels: [],
        channelMax: a.options.channelMax || 10,
        active: {},
        play: function() {}
    }, a.hasWebAudio = "undefined" != typeof AudioContext || "undefined" != typeof webkitAudioContext, a.hasWebAudio && (a.audioContext = "undefined" != typeof AudioContext ? new AudioContext : new window.webkitAudioContext), a.enableSound = function() {
        return a.hasWebAudio ? a.audio.enableWebAudioSound() : a.audio.enableHTML5Sound(), a
    }, a.audio.enableWebAudioSound = function() {
        a.audio.type = "WebAudio", a.audio.soundID = 0, a.audio.playingSounds = {}, a.audio.removeSound = function(b) {
            delete a.audio.playingSounds[b]
        }, a.audio.play = function(b, c) {
            var d = (new Date).getTime();
            if (!(a.audio.active[b] && a.audio.active[b] > d)) {
                c && c.debounce ? a.audio.active[b] = d + c.debounce : delete a.audio.active[b];
                var e = a.audio.soundID++,
                    f = a.audioContext.createBufferSource();
                f.buffer = a.asset(b), f.connect(a.audioContext.destination), c && c.loop ? f.loop = !0 : setTimeout(function() {
                    a.audio.removeSound(e)
                }, 1e3 * f.buffer.duration), f.assetName = b, f.start ? f.start(0) : f.noteOn(0), a.audio.playingSounds[e] = f
            }
        }, a.audio.stop = function(b) {
            for (var c in a.audio.playingSounds) {
                var d = a.audio.playingSounds[c];
                b && b !== d.assetName || (d.stop ? d.stop(0) : d.noteOff(0))
            }
        }
    }, a.audio.enableHTML5Sound = function() {
        a.audio.type = "HTML5";
        for (var b = 0; b < a.audio.channelMax; b++) a.audio.channels[b] = {}, a.audio.channels[b].channel = new Audio, a.audio.channels[b].finished = -1;
        a.audio.play = function(b, c) {
            var d = (new Date).getTime();
            if (!(a.audio.active[b] && a.audio.active[b] > d)) {
                c && c.debounce ? a.audio.active[b] = d + c.debounce : delete a.audio.active[b];
                for (var e = 0; e < a.audio.channels.length; e++)
                    if (!a.audio.channels[e].loop && a.audio.channels[e].finished < d) {
                        a.audio.channels[e].channel.src = a.asset(b).src, c && c.loop ? (a.audio.channels[e].loop = !0, a.audio.channels[e].channel.loop = !0) : a.audio.channels[e].finished = d + 1e3 * a.asset(b).duration, a.audio.channels[e].channel.load(), a.audio.channels[e].channel.play();
                        break
                    }
            }
        }, a.audio.stop = function(b) {
            for (var c = b ? a.asset(b).src : null, d = (new Date).getTime(), e = 0; e < a.audio.channels.length; e++) c && a.audio.channels[e].channel.src !== c || !(a.audio.channels[e].loop || a.audio.channels[e].finished >= d) || (a.audio.channels[e].channel.pause(), a.audio.channels[e].loop = !1)
        }
    }
}, 




// KEYBOARD MAPPINGS


Quintus.Input = function(a) {
    var b = a.KEY_NAMES = {
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            SPACE: 32,
            Z: 90,
            X: 88,
            ENTER: 13,
            ESC: 27,
            P: 80,
            S: 83
        },
        c = {
            LEFT: "left",
            RIGHT: "right",
            UP: "up",
            DOWN: "down",
            SPACE: "fire",
            Z: "fire",
            X: "action",
            ENTER: "confirm",
            ESC: "esc",
            P: "P",
            S: "S"
        },
        d = [
            ["left", "←"],
            ["right", "→"],
            [],
            [],
            [],
            ["action", "↑"],
            ["fire", "+"]
        ],
        e = ["up", "right", "down", "left"];
    a.inputs = {}, a.joypad = {};
    var f = !!("ontouchstart" in window);
    a.canvasToStageX = function(b, c) {
        return b = b / a.cssWidth * a.width, c.viewport && (b /= c.viewport.scale, b += c.viewport.x), b
    }, a.canvasToStageY = function(b, c) {
        return b = b / a.cssWidth * a.width, c.viewport && (b /= c.viewport.scale, b += c.viewport.y), b
    }, a.InputSystem = a.Evented.extend({
        keys: {},
        keypad: {},
        keyboardEnabled: !1,
        touchEnabled: !1,
        joypadEnabled: !1,
        bindKey: function(c, d) {
            a.input.keys[b[c] || c] = d
        },
        enableKeyboard: function() {
            return this.keyboardEnabled ? !1 : (a.el.tabIndex = 0, a.el.style.outline = 0, a.el.addEventListener("keydown", function(b) {
                if (a.input.keys[b.keyCode]) {
                    var c = a.input.keys[b.keyCode];
                    a.inputs[c] = !0, a.input.trigger(c), a.input.trigger("keydown", b.keyCode)
                }
                b.preventDefault()
            }, !1), a.el.addEventListener("keyup", function(b) {
                if (a.input.keys[b.keyCode]) {
                    var c = a.input.keys[b.keyCode];
                    a.inputs[c] = !1, a.input.trigger(c + "Up"), a.input.trigger("keyup", b.keyCode)
                }
                b.preventDefault()
            }, !1), a.options.autoFocus && a.el.focus(), this.keyboardEnabled = !0, void 0)
        },
        keyboardControls: function(b) {
            b = b || c, a._each(b, function(a, b) {
                this.bindKey(b, a)
            }, a.input), this.enableKeyboard()
        },
        _containerOffset: function() {
            a.input.offsetX = 0, a.input.offsetY = 0;
            var b = a.el;
            do a.input.offsetX += b.offsetLeft, a.input.offsetY += b.offsetTop; while (b = b.offsetParent)
        },
        touchLocation: function(b) {
            var c, d, e = (a.el, b.offsetX),
                f = b.offsetY;
            return (a._isUndefined(e) || a._isUndefined(f)) && (e = b.layerX, f = b.layerY), (a._isUndefined(e) || a._isUndefined(f)) && (void 0 === a.input.offsetX && a.input._containerOffset(), e = b.pageX - a.input.offsetX, f = b.pageY - a.input.offsetY), c = a.width * e / a.cssWidth, d = a.height * f / a.cssHeight, {
                x: c,
                y: d
            }
        },
        touchControls: function(b) {
            function c(c) {
                for (var d = a.input.touchLocation(c), e = b.bottom - b.unit, f = 0, g = b.controls.length; g > f; f++) {
                    var h = b.left + f * b.unit + f * b.gutter;
                    if (d.x >= h && d.x <= h + b.unit && (b.fullHeight || d.y >= e && d.y <= e + b.unit)) return b.controls[f][0]
                }
            }

            function e(d) {
                var e, f, g, h, i, j = {};
                for (e = 0, f = b.controls.length; f > e; e++) i = b.controls[e][0], a.inputs[i] && (j[i] = !0), a.inputs[i] = !1;
                var k = d.touches ? d.touches : [d];
                for (e = 0, f = k.length; f > e; e++) g = k[e], h = c(g), h && (a.inputs[h] = !0, j[h] ? delete j[h] : a.input.trigger(h));
                for (i in j) a.input.trigger(i + "Up");
                return null
            }
            return this.touchEnabled ? !1 : f ? (a.input.keypad = b = a._extend({
                left: 0,
                gutter: 10,
                controls: d,
                width: a.width,
                bottom: a.height,
                fullHeight: !1
            }, b), b.unit = b.width / b.controls.length, b.size = b.unit - 2 * b.gutter, this.touchDispatchHandler = function(a) {
                e(a), a.preventDefault()
            }, a._each(["touchstart", "touchend", "touchmove", "touchcancel"], function(b) {
                a.el.addEventListener(b, this.touchDispatchHandler)
            }, this), this.touchEnabled = !0, void 0) : !1
        },
        disableTouchControls: function() {
            a._each(["touchstart", "touchend", "touchmove", "touchcancel"], function(b) {
                a.el.removeEventListener(b, this.touchDispatchHandler)
            }, this), a.el.removeEventListener("touchstart", this.joypadStart), a.el.removeEventListener("touchmove", this.joypadMove), a.el.removeEventListener("touchend", this.joypadEnd), a.el.removeEventListener("touchcancel", this.joypadEnd), this.touchEnabled = !1;
            for (var b in a.inputs) a.inputs[b] = !1
        },
        joypadControls: function(b) {
            if (this.joypadEnabled) return !1;
            if (!f) return !1;
            var c = a.joypad = a._defaults(b || {}, {
                size: 50,
                trigger: 20,
                center: 25,
                color: "#CCC",
                background: "#000",
                alpha: .5,
                zone: a.width / 2,
                joypadTouch: null,
                inputs: e,
                triggers: []
            });
            this.joypadStart = function(b) {
                if (null === c.joypadTouch) {
                    var d = b.changedTouches[0],
                        e = a.input.touchLocation(d);
                    e.x < c.zone && (c.joypadTouch = d.identifier, c.centerX = e.x, c.centerY = e.y, c.x = null, c.y = null)
                }
            }, this.joypadMove = function(b) {
                if (null !== c.joypadTouch)
                    for (var d = b, e = 0, f = d.changedTouches.length; f > e; e++) {
                        var g = d.changedTouches[e];
                        if (g.identifier === c.joypadTouch) {
                            var h = a.input.touchLocation(g),
                                i = h.x - c.centerX,
                                j = h.y - c.centerY,
                                k = Math.sqrt(i * i + j * j),
                                l = Math.max(1, k / c.size),
                                m = Math.atan2(i, j);
                            l > 1 && (i /= l, j /= l, k /= l);
                            for (var n = [j < -c.trigger, i > c.trigger, j > c.trigger, i < -c.trigger], o = 0; o < n.length; o++) {
                                var p = c.inputs[o];
                                n[o] ? (a.inputs[p] = !0, c.triggers[o] || a.input.trigger(p)) : (a.inputs[p] = !1, c.triggers[o] && a.input.trigger(p + "Up"))
                            }
                            a._extend(c, {
                                dx: i,
                                dy: j,
                                x: c.centerX + i,
                                y: c.centerY + j,
                                dist: k,
                                ang: m,
                                triggers: n
                            });
                            break
                        }
                    }
                b.preventDefault()
            }, this.joypadEnd = function(b) {
                var d = b;
                if (null !== c.joypadTouch)
                    for (var e = 0, f = d.changedTouches.length; f > e; e++) {
                        var g = d.changedTouches[e];
                        if (g.identifier === c.joypadTouch) {
                            for (var h = 0; h < c.triggers.length; h++) {
                                var i = c.inputs[h];
                                a.inputs[i] = !1, c.triggers[h] && a.input.trigger(i + "Up")
                            }
                            c.joypadTouch = null;
                            break
                        }
                    }
                b.preventDefault()
            }, a.el.addEventListener("touchstart", this.joypadStart), a.el.addEventListener("touchmove", this.joypadMove), a.el.addEventListener("touchend", this.joypadEnd), a.el.addEventListener("touchcancel", this.joypadEnd), this.joypadEnabled = !0
        },
        mouseControls: function(b) {
            b = b || {};
            var c = b.stageNum || 0,
                d = b.mouseX || "mouseX",
                e = b.mouseY || "mouseY",
                f = b.cursor || "off",
                g = {};
            "on" !== f && (a.el.style.cursor = "off" === f ? "none" : f), a.inputs[d] = 0, a.inputs[e] = 0, a._mouseMove = function(b) {
                b.preventDefault();
                var f = b.touches ? b.touches[0] : b,
                    h = (a.el, f.offsetX),
                    i = f.offsetY,
                    j = a.stage(c);
                (a._isUndefined(h) || a._isUndefined(i)) && (h = f.layerX, i = f.layerY), (a._isUndefined(h) || a._isUndefined(i)) && (void 0 === a.input.offsetX && a.input._containerOffset(), h = f.pageX - a.input.offsetX, i = f.pageY - a.input.offsetY), j && (g.x = a.canvasToStageX(h, j), g.y = a.canvasToStageY(i, j), a.inputs[d] = g.x, a.inputs[e] = g.y, a.input.trigger("mouseMove", g))
            }, a.el.addEventListener("mousemove", a._mouseMove, !0), a.el.addEventListener("touchstart", a._mouseMove, !0), a.el.addEventListener("touchmove", a._mouseMove, !0)
        },
        disableMouseControls: function() {
            a._mouseMove && (a.el.removeEventListener("mousemove", a._mouseMove, !0), a.el.style.cursor = "inherit", a._mouseMove = null)
        },
        drawButtons: function() {
            var b = a.input.keypad,
                c = a.ctx;
            c.save(), c.textAlign = "center", c.textBaseline = "middle";
            for (var d = 0; d < b.controls.length; d++) {
                var e = b.controls[d];
                if (e[0]) {
                    c.font = "bold " + b.size / 2 + "px arial";
                    var f = b.left + d * b.unit + b.gutter,
                        g = b.bottom - b.unit,
                        h = a.inputs[e[0]];
                    c.fillStyle = b.color || "#f2da38", c.globalAlpha = h ? 1 : .8, c.fillRect(f, g, b.size, b.size), c.fillStyle = b.text || "#000000", c.fillText(e[1], f + b.size / 2, g + b.size / 2)
                }
            }
            c.restore()
        },
        drawCircle: function(b, c, d, e) {
            var f = a.ctx,
                g = a.joypad;
            f.save(), f.beginPath(), f.globalAlpha = g.alpha, f.fillStyle = d, f.arc(b, c, e, 0, 2 * Math.PI, !0), f.closePath(), f.fill(), f.restore()
        },
        drawJoypad: function() {
            var b = a.joypad;
            null !== b.joypadTouch && (a.input.drawCircle(b.centerX, b.centerY, b.background, b.size), null !== b.x && a.input.drawCircle(b.x, b.y, b.color, b.center))
        },
        drawCanvas: function() {
            this.touchEnabled && this.drawButtons(), this.joypadEnabled && this.drawJoypad()
        }
    }), a.input = new a.InputSystem, a.controls = function(b) {
        return a.input.keyboardControls(), b ? (a.input.touchControls({
            controls: [
                [],
                [],
                [],
                ["action", "b"],
                ["fire", "a"]
            ]
        }), a.input.joypadControls()) : a.input.touchControls(), a
    }, a.component("platformerControls", {
        defaults: {
            speed: 200,
            jumpSpeed: -300,
            collisions: []
        },
        added: function() {
            var b = this.entity.p;
            a._defaults(b, this.defaults), this.entity.on("step", this, "step"), this.entity.on("bump.bottom", this, "landed"), b.landed = 0, b.direction = "right"
        },
        landed: function() {
            var a = this.entity.p;
            a.landed = .2
        },
        step: function(b) {
            var c = this.entity.p;
            if (void 0 === c.ignoreControls || !c.ignoreControls) {
                var d = null;
                if (void 0 !== c.collisions && c.collisions.length > 0 && (a.inputs.left || a.inputs.right || c.landed > 0)) {
                    if (1 === c.collisions.length) d = c.collisions[0];
                    else {
                        d = null;
                        for (var e = 0; e < c.collisions.length; e++) c.collisions[e].normalY < 0 && (d = c.collisions[e])
                    }
                    null !== d && d.normalY > -.3 && d.normalY < .3 && (d = null)
                }
                a.inputs.left ? (c.direction = "left", d && c.landed > 0 ? (c.vx = c.speed * d.normalY, c.vy = -c.speed * d.normalX) : c.vx = -c.speed) : a.inputs.right ? (c.direction = "right", d && c.landed > 0 ? (c.vx = -c.speed * d.normalY, c.vy = c.speed * d.normalX) : c.vx = c.speed) : (c.vx = 0, d && c.landed > 0 && (c.vy = 0)), c.landed > 0 && (a.inputs.up || a.inputs.action) && !c.jumping ? (c.vy = c.jumpSpeed, c.landed = -b, c.jumping = !0) : (a.inputs.up || a.inputs.action) && (this.entity.trigger("jump", this.entity), c.jumping = !0), !c.jumping || a.inputs.up || a.inputs.action || (c.jumping = !1, this.entity.trigger("jumped", this.entity), c.vy < c.jumpSpeed / 3 && (c.vy = c.jumpSpeed / 3))
            }
            c.landed -= b
        }
    }), a.component("stepControls", {
        added: function() {
            var a = this.entity.p;
            a.stepDistance || (a.stepDistance = 32), a.stepDelay || (a.stepDelay = .15), a.stepWait = 0, this.entity.on("step", this, "step"), this.entity.on("hit", this, "collision")
        },
        collision: function() {
            var a = this.entity.p;
            a.stepping && (a.stepping = !1, a.x = a.origX, a.y = a.origY)
        },
        step: function(b) {
            var c = this.entity.p;
            c.stepWait -= b, c.stepping && (c.x += c.diffX * b / c.stepDelay, c.y += c.diffY * b / c.stepDelay), c.stepWait > 0 || (c.stepping && (c.x = c.destX, c.y = c.destY), c.stepping = !1, c.diffX = 0, c.diffY = 0, a.inputs.left ? c.diffX = -c.stepDistance : a.inputs.right && (c.diffX = c.stepDistance), a.inputs.up ? c.diffY = -c.stepDistance : a.inputs.down && (c.diffY = c.stepDistance), (c.diffY || c.diffX) && (c.stepping = !0, c.origX = c.x, c.origY = c.y, c.destX = c.x + c.diffX, c.destY = c.y + c.diffY, c.stepWait = c.stepDelay))
        }
    })
}, Quintus.Scenes = function(a) {
    a.scenes = {}, a.stages = [], a.Class.extend("Scene", {
        init: function(a, b) {
            this.opts = b || {}, this.sceneFunc = a
        }
    }), a.scene = function(b, c, d) {
        return void 0 === c ? a.scenes[b] : (a._isFunction(c) && (c = new a.Scene(c, d), c.name = b), a.scenes[b] = c, c)
    }, a._nullContainer = {
        c: {
            x: 0,
            y: 0,
            angle: 0,
            scale: 1
        },
        matrix: a.matrix2d()
    }, a.collision = function() {
        function b(a, b) {
            var c = a[b],
                d = a[b + 1] || a[0];
            f = -(d[1] - c[1]), g = d[0] - c[0];
            var e = Math.sqrt(f * f + g * g);
            e > 0 && (f /= e, g /= e)
        }

        function c(a) {
            return f * a[0] + g * a[1]
        }

        function d(a, d, e) {
            var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = Number.POSITIVE_INFINITY,
                z = !1,
                A = e ? j : i;
            for (h[0] = 0, h[1] = 0, a.c ? w = a.c.points : (w = a.p.points, h[0] += a.p.x, h[1] += a.p.y), d.c ? x = d.c.points : (x = d.p.points, h[0] += -d.p.x, h[1] += -d.p.y), a = a.p, d = d.p, s = 0; s < w.length; s++) {
                for (b(w, s), k = c(w[0]), l = k, t = 1; t < w.length; t++) r = c(w[t]), k > r && (k = r), r > l && (l = r);
                for (m = c(x[0]), n = m, t = 1; t < x.length; t++) r = c(x[t]), m > r && (m = r), r > n && (n = r);
                if (q = c(h), k += q, l += q, o = k - n, p = m - l, o > 0 || p > 0) return null;
                u = -1 * (n - k), e && (u *= -1), v = Math.abs(u), y > v && (A.distance = u, A.magnitude = v, A.normalX = f, A.normalY = g, A.distance > 0 && (A.distance *= -1, A.normalX *= -1, A.normalY *= -1), z = !0, y = v)
            }
            return z ? A : null
        }

        function e(b, c) {
            var e, f, g;
            return b.p.points || a._generatePoints(b), c.p.points || a._generatePoints(c), (e = d(b, c)) ? (f = d(c, b, !0)) ? (g = f.magnitude < e.magnitude ? f : e, 0 === g.magnitude ? !1 : (g.separate[0] = g.distance * g.normalX, g.separate[1] = g.distance * g.normalY, g)) : !1 : !1
        }
        var f, g, h = [0, 0],
            i = {
                separate: []
            },
            j = {
                separate: []
            };
        return e
    }(), a.overlap = function(a, b) {
        var c = a.c || a.p || a,
            d = b.c || b.p || b,
            e = c.x - (c.cx || 0),
            f = c.y - (c.cy || 0),
            g = d.x - (d.cx || 0),
            h = d.y - (d.cy || 0);
        return !(f + c.h < h || f > h + d.h || e + c.w < g || e > g + d.w)
    }, a.Stage = a.GameObject.extend({
        defaults: {
            sort: !1,
            gridW: 400,
            gridH: 400,
            x: 0,
            y: 0
        },
        init: function(b, c) {
            this.scene = b, this.items = [], this.lists = {}, this.index = {}, this.removeList = [], this.grid = {}, this._collisionLayers = [], this.time = 0, this.defaults.w = a.width, this.defaults.h = a.height, this.options = a._extend({}, this.defaults), this.scene && a._extend(this.options, b.opts), c && a._extend(this.options, c), this.options.sort && !a._isFunction(this.options.sort) && (this.options.sort = function(a, b) {
                return (a.p && a.p.z || -1) - (b.p && b.p.z || -1)
            })
        },
        destroyed: function() {
            this.invoke("debind"), this.trigger("destroyed")
        },
        loadScene: function() {
            this.scene && this.scene.sceneFunc(this)
        },
        loadAssets: function(b) {
            for (var c = a._isArray(b) ? b : a.asset(b), d = 0; d < c.length; d++) {
                var e = c[d][0],
                    f = c[d][1];
                this.insert(new a[e](f))
            }
        },
        each: function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) a.call(this.items[b], arguments[1], arguments[2])
        },
        invoke: function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) this.items[b][a].call(this.items[b], arguments[1], arguments[2])
        },
        detect: function(a) {
            for (var b = this.items.length - 1; b >= 0; b--)
                if (a.call(this.items[b], arguments[1], arguments[2], arguments[3])) return this.items[b];
            return !1
        },
        identify: function(a) {
            for (var b, c = this.items.length - 1; c >= 0; c--)
                if (b = a.call(this.items[c], arguments[1], arguments[2], arguments[3])) return b;
            return !1
        },
        find: function(a) {
            return this.index[a]
        },
        addToLists: function(a, b) {
            for (var c = 0; c < a.length; c++) this.addToList(a[c], b)
        },
        addToList: function(a, b) {
            this.lists[a] || (this.lists[a] = []), this.lists[a].push(b)
        },
        removeFromLists: function(a, b) {
            for (var c = 0; c < a.length; c++) this.removeFromList(a[c], b)
        },
        removeFromList: function(a, b) {
            var c = this.lists[a].indexOf(b); - 1 !== c && this.lists[a].splice(c, 1)
        },
        insert: function(b, c) {
            return this.items.push(b), b.stage = this, b.container = c, c && c.children.push(b), b.grid = {}, a._generatePoints(b), a._generateCollisionPoints(b), b.className && this.addToList(b.className, b), b.activeComponents && this.addToLists(b.activeComponents, b), b.p && (this.index[b.p.id] = b), this.trigger("inserted", b), b.trigger("inserted", this), this.regrid(b), b
        },
        remove: function(a) {
            this.delGrid(a), this.removeList.push(a)
        },
        forceRemove: function(a) {
            var b = this.items.indexOf(a);
            if (-1 !== b) {
                if (this.items.splice(b, 1), a.className && this.removeFromList(a.className, a), a.activeComponents && this.removeFromLists(a.activeComponents, a), a.container) {
                    var c = a.container.children.indexOf(a); - 1 !== c && a.container.children.splice(c, 1)
                }
                a.destroy && a.destroy(), a.p.id && delete this.index[a.p.id], this.trigger("removed", a)
            }
        },
        pause: function() {
            this.paused = !0
        },
        unpause: function() {
            this.paused = !1
        },
        _gridCellCheck: function(b, c, d, e) {
            if (a._isUndefined(e) || e & b) {
                var f = this.index[c];
                if (f && f !== d && a.overlap(d, f)) {
                    var g = a.collision(d, f);
                    return g ? (g.obj = f, g) : !1
                }
            }
        },
        gridTest: function(b, c) {
            for (var d, e, f = b.grid, g = f.Y1; g <= f.Y2; g++)
                if (this.grid[g])
                    for (var h = f.X1; h <= f.X2; h++)
                        if (d = this.grid[g][h], d && (e = a._detect(d, this._gridCellCheck, this, b, c))) return e;
            return !1
        },
        collisionLayer: function(a) {
            return this._collisionLayers.push(a), a.collisionLayer = !0, this.insert(a)
        },
        _collideCollisionLayer: function(a, b) {
            for (var c, d = 0, e = this._collisionLayers.length; e > d; d++) {
                var f = this._collisionLayers[d];
                if (f.p.type & b && (c = f.collide(a))) return c.obj = f, c
            }
            return !1
        },
        search: function(b, c) {
            var d;
            return b.grid || this.regrid(b, b.stage !== this), c = a._isUndefined(c) ? b.p && b.p.collisionMask : c, d = this._collideCollisionLayer(b, c), d = d || this.gridTest(b, c)
        },
        _locateObj: {
            p: {
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                w: 1,
                h: 1
            },
            grid: {}
        },
        locate: function(a, b, c) {
            var d = null;
            return this._locateObj.p.x = a, this._locateObj.p.y = b, this.regrid(this._locateObj, !0), d = this._collideCollisionLayer(this._locateObj, c), d = d || this.gridTest(this._locateObj, c), d && d.obj ? d.obj : !1
        },
        collide: function(b, c) {
            var d, e, f, g, h, i;
            for (a._isObject(c) ? (f = c.collisionMask, g = c.maxCol, i = c.skipEvents) : f = c, f = a._isUndefined(f) ? b.p && b.p.collisionMask : f, g = g || 3, a._generateCollisionPoints(b), this.regrid(b), h = g; h > 0 && (d = this._collideCollisionLayer(b, f));) i || (b.trigger("hit", d), b.trigger("hit.collision", d)), a._generateCollisionPoints(b), this.regrid(b), h--;
            for (h = g; h > 0 && (e = this.gridTest(b, f));) {
                if (b.trigger("hit", e), b.trigger("hit.sprite", e), !i) {
                    var j = e.obj;
                    e.obj = b, e.normalX *= -1, e.normalY *= -1, e.distance = 0, e.magnitude = 0, e.separate[0] = 0, e.separate[1] = 0, j.trigger("hit", e), j.trigger("hit.sprite", e)
                }
                a._generateCollisionPoints(b), this.regrid(b), h--
            }
            return e || d
        },
        delGrid: function(a) {
            for (var b = a.grid, c = b.Y1; c <= b.Y2; c++)
                if (this.grid[c])
                    for (var d = b.X1; d <= b.X2; d++) this.grid[c][d] && delete this.grid[c][d][a.p.id]
        },
        addGrid: function(a) {
            for (var b = a.grid, c = b.Y1; c <= b.Y2; c++) {
                this.grid[c] || (this.grid[c] = {});
                for (var d = b.X1; d <= b.X2; d++) this.grid[c][d] || (this.grid[c][d] = {}), this.grid[c][d][a.p.id] = a.p.type
            }
        },
        regrid: function(a, b) {
            if (!a.collisionLayer) {
                a.grid = a.grid || {};
                var c = a.c || a.p,
                    d = Math.floor((c.x - c.cx) / this.options.gridW),
                    e = Math.floor((c.y - c.cy) / this.options.gridH),
                    f = Math.floor((c.x - c.cx + c.w) / this.options.gridW),
                    g = Math.floor((c.y - c.cy + c.h) / this.options.gridH),
                    h = a.grid;
                (h.X1 !== d || h.X2 !== f || h.Y1 !== e || h.Y2 !== g) && (void 0 !== h.X1 && this.delGrid(a), h.X1 = d, h.X2 = f, h.Y1 = e, h.Y2 = g, b || this.addGrid(a))
            }
        },
        markSprites: function(b, c) {
            for (var d, e, f = this.viewport, g = f ? f.scale : 1, h = f ? f.x : 0, i = f ? f.y : 0, j = a.width / g, k = a.height / g, l = Math.floor(h / this.options.gridW), m = Math.floor(i / this.options.gridH), n = Math.floor((h + j) / this.options.gridW), o = Math.floor((i + k) / this.options.gridH), p = m; o >= p; p++)
                if (d = this.grid[p])
                    for (var q = l; n >= q; q++)
                        if (e = d[q])
                            for (var r in e) this.index[r] && (this.index[r].mark = c, this.index[r].container && (this.index[r].container.mark = c))
        },
        updateSprites: function(b, c, d) {
            for (var e, f = 0, g = b.length; g > f; f++) e = b[f], (d || !e.p.visibleOnly || e.mark && !(e.mark < this.time)) && (d || !e.container) && (e.update(c), a._generateCollisionPoints(e), this.regrid(e))
        },
        step: function(a) {
            if (this.paused) return !1;
            if (this.time += a, this.markSprites(this.items, this.time), this.trigger("prestep", a), this.updateSprites(this.items, a), this.trigger("step", a), this.removeList.length > 0) {
                for (var b = 0, c = this.removeList.length; c > b; b++) this.forceRemove(this.removeList[b]);
                this.removeList.length = 0
            }
            this.trigger("poststep", a)
        },
        hide: function() {
            this.hidden = !0
        },
        show: function() {
            this.hidden = !1
        },
        stop: function() {
            this.hide(), this.pause()
        },
        start: function() {
            this.show(), this.unpause()
        },
        render: function(a) {
            if (this.hidden) return !1;
            this.options.sort && this.items.sort(this.options.sort), this.trigger("prerender", a), this.trigger("beforerender", a);
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                !d.container && (d.p.renderAlways || d.mark >= this.time) && d.render(a)
            }
            this.trigger("render", a), this.trigger("postrender", a)
        }
    }), a.activeStage = 0, a.StageSelector = a.Class.extend({
        emptyList: [],
        init: function(a, b) {
            this.stage = a, this.selector = b, this.items = this.stage.lists[this.selector] || this.emptyList, this.length = this.items.length
        },
        each: function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) a.call(this.items[b], arguments[1], arguments[2]);
            return this
        },
        invoke: function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) this.items[b][a].call(this.items[b], arguments[1], arguments[2]);
            return this
        },
        trigger: function(a, b) {
            this.invoke("trigger", a, b)
        },
        destroy: function() {
            this.invoke("destroy")
        },
        detect: function(a) {
            for (var b = 0, c = this.items.length; c > b; b++)
                if (a.call(this.items[b], arguments[1], arguments[2])) return this.items[b];
            return !1
        },
        identify: function(a) {
            for (var b = null, c = 0, d = this.items.length; d > c; c++)
                if (b = a.call(this.items[c], arguments[1], arguments[2])) return b;
            return !1
        },
        _pObject: function(b) {
            a._extend(this.p, b)
        },
        _pSingle: function(a, b) {
            this.p[a] = b
        },
        set: function(a, b) {
            return void 0 === b ? this.each(this._pObject, a) : this.each(this._pSingle, a, b), this
        },
        at: function(a) {
            return this.items[a]
        },
        first: function() {
            return this.items[0]
        },
        last: function() {
            return this.items[this.items.length - 1]
        }
    }), a.select = function(b, c) {
        return c = void 0 === c ? a.activeStage : c, c = a.stage(c), a._isNumber(b) ? c.index[b] : new a.StageSelector(c, b)
    }, a.stage = function(b) {
        return b = void 0 === b ? a.activeStage : b, a.stages[b]
    }, a.stageScene = function(b, c, d) {
        a._isString(b) && (b = a.scene(b)), a._isObject(c) && (d = c, c = a._popProperty(d, "stage") || b && b.opts.stage || 0), d = a._clone(d);
        var e = a._popProperty(d, "stageClass") || b && b.opts.stageClass || a.Stage;
        c = a._isUndefined(c) ? b && b.opts.stage || 0 : c, a.stages[c] && a.stages[c].destroy(), a.activeStage = c;
        var f = a.stages[c] = new e(b, d);
        return f.options.asset && f.loadAssets(f.options.asset), b && f.loadScene(), a.activeStage = 0, a.loop || a.gameLoop(a.stageGameLoop), f
    }, a.stageGameLoop = function(b) {
        var c, d, e;
        for (0 > b && (b = 1 / 60), b > 1 / 15 && (b = 1 / 15), c = 0, d = a.stages.length; d > c; c++) a.activeStage = c, e = a.stage(), e && e.step(b);
        for (a.ctx && a.clear(), c = 0, d = a.stages.length; d > c; c++) a.activeStage = c, e = a.stage(), e && e.render(a.ctx);
        a.activeStage = 0, a.input && a.ctx && a.input.drawCanvas(a.ctx)
    }, a.clearStage = function(b) {
        a.stages[b] && (a.stages[b].destroy(), a.stages[b] = null)
    }, a.clearStages = function() {
        for (var b = 0, c = a.stages.length; c > b; b++) a.stages[b] && a.stages[b].destroy();
        a.stages.length = 0
    }
}, Quintus.Sprites = function(a) {
    return a.Class.extend("SpriteSheet", {
        init: function(b, c, d) {
            if (!a.asset(c)) throw "Invalid Asset:" + c;
            a._extend(this, {
                name: b,
                asset: c,
                w: a.asset(c).width,
                h: a.asset(c).height,
                tileW: 64,
                tileH: 64,
                sx: 0,
                sy: 0,
                spacingX: 0,
                spacingY: 0,
                frameProperties: {}
            }), d && a._extend(this, d), this.tilew && (this.tileW = this.tilew, delete this.tilew), this.tileh && (this.tileH = this.tileh, delete this.tileh), this.cols = this.cols || Math.floor(this.w / (this.tileW + this.spacingX))
        },
        fx: function(a) {
            return Math.floor(a % this.cols * (this.tileW + this.spacingX) + this.sx)
        },
        fy: function(a) {
            return Math.floor(Math.floor(a / this.cols) * (this.tileH + this.spacingY) + this.sy)
        },
        draw: function(b, c, d, e) {
            b || (b = a.ctx), b.drawImage(a.asset(this.asset), this.fx(e), this.fy(e), this.tileW, this.tileH, Math.floor(c), Math.floor(d), this.tileW, this.tileH)
        }
    }), a.sheets = {}, a.sheet = function(b, c, d) {
        return c ? (a.sheets[b] = new a.SpriteSheet(b, c, d), void 0) : a.sheets[b]
    }, a.compileSheets = function(b, c) {
        var d = a.asset(c);
        a._each(d, function(c, d) {
            a.sheet(d, b, c)
        })
    }, a.SPRITE_NONE = 0, a.SPRITE_DEFAULT = 1, a.SPRITE_PARTICLE = 2, a.SPRITE_ACTIVE = 4, a.SPRITE_FRIENDLY = 8, a.SPRITE_ENEMY = 16, a.SPRITE_POWERUP = 32, a.SPRITE_UI = 64, a.SPRITE_ALL = 65535, a._generatePoints = function(a, b) {
        if (!a.p.points || b) {
            var c = a.p,
                d = c.w / 2,
                e = c.h / 2;
            c.points = [
                [-d, -e],
                [d, -e],
                [d, e],
                [-d, e]
            ]
        }
    }, a._generateCollisionPoints = function(b) {
        if (b.matrix || b.refreshMatrix) {
            b.c || (b.c = {
                points: []
            });
            var c = b.p,
                d = b.c;
            if (c.moved || d.origX !== c.x || d.origY !== c.y || d.origScale !== c.scale || d.origAngle !== c.angle) {
                d.origX = c.x, d.origY = c.y, d.origScale = c.scale, d.origAngle = c.angle, b.refreshMatrix();
                var e;
                if (!(b.container || c.scale && 1 !== c.scale || 0 !== c.angle)) {
                    for (e = 0; e < b.p.points.length; e++) b.c.points[e] = b.c.points[e] || [], b.c.points[e][0] = c.x + b.p.points[e][0], b.c.points[e][1] = c.y + b.p.points[e][1];
                    return d.x = c.x, d.y = c.y, d.cx = c.cx, d.cy = c.cy, d.w = c.w, d.h = c.h, void 0
                }
                var f = b.container || a._nullContainer;
                d.x = f.matrix.transformX(c.x, c.y), d.y = f.matrix.transformY(c.x, c.y), d.angle = c.angle + f.c.angle, d.scale = (f.c.scale || 1) * (c.scale || 1);
                var g = 1 / 0,
                    h = 1 / 0,
                    i = -1 / 0,
                    j = -1 / 0;
                for (e = 0; e < b.p.points.length; e++) {
                    b.c.points[e] || (b.c.points[e] = []), b.matrix.transformArr(b.p.points[e], b.c.points[e]);
                    var k = b.c.points[e][0],
                        l = b.c.points[e][1];
                    g > k && (g = k), k > i && (i = k), h > l && (h = l), l > j && (j = l)
                }
                g === i && (i += 1), h === j && (j += 1), d.cx = d.x - g, d.cy = d.y - h, d.w = i - g, d.h = j - h
            }
        }
    }, a.GameObject.extend("Sprite", {
        init: function(b, c) {
            this.p = a._extend({
                x: 0,
                y: 0,
                z: 0,
                opacity: 1,
                angle: 0,
                frame: 0,
                type: a.SPRITE_DEFAULT | a.SPRITE_ACTIVE,
                name: "",
                spriteProperties: {}
            }, c), this.matrix = new a.Matrix2D, this.children = [], a._extend(this.p, b), this.size(), this.p.id = this.p.id || a._uniqueId(), this.refreshMatrix()
        },
        size: function(a) {
            !a && this.p.w && this.p.h || (this.asset() ? (this.p.w = this.asset().width, this.p.h = this.asset().height) : this.sheet() && (this.p.w = this.sheet().tileW, this.p.h = this.sheet().tileH)), this.p.cx = a || void 0 === this.p.cx ? this.p.w / 2 : this.p.cx, this.p.cy = a || void 0 === this.p.cy ? this.p.h / 2 : this.p.cy
        },
        asset: function(b, c) {
            return b ? (this.p.asset = b, c && (this.size(!0), a._generatePoints(this, !0)), void 0) : a.asset(this.p.asset)
        },
        sheet: function(b, c) {
            return b ? (this.p.sheet = b, c && (this.size(!0), a._generatePoints(this, !0)), void 0) : a.sheet(this.p.sheet)
        },
        hide: function() {
            this.p.hidden = !0
        },
        show: function() {
            this.p.hidden = !1
        },
        set: function(b) {
            return a._extend(this.p, b), this
        },
        _sortChild: function(a, b) {
            return (a.p && a.p.z || -1) - (b.p && b.p.z || -1)
        },
        _flipArgs: {
            x: [-1, 1],
            y: [1, -1],
            xy: [-1, -1]
        },
        render: function(b) {
            var c = this.p;
            c.hidden || (b || (b = a.ctx), this.trigger("predraw", b), b.save(), void 0 !== this.p.opacity && 1 !== this.p.opacity && (b.globalAlpha = this.p.opacity), this.matrix.setContextTransform(b), this.p.flip && b.scale.apply(b, this._flipArgs[this.p.flip]), this.trigger("beforedraw", b), this.draw(b), this.trigger("draw", b), b.restore(), this.p.sort && this.children.sort(this._sortChild), a._invoke(this.children, "render", b), this.trigger("postdraw", b), a.debug && this.debugRender(b))
        },
        center: function() {
            this.container ? (this.p.x = this.container.p.w / 2, this.p.y = this.container.p.h / 2) : (this.p.x = a.width / 2, this.p.y = a.height / 2)
        },
        draw: function(b) {
            var c = this.p;
            c.sheet ? this.sheet().draw(b, -c.cx, -c.cy, c.frame) : c.asset ? b.drawImage(a.asset(c.asset), -c.cx, -c.cy) : c.color && (b.fillStyle = c.color, b.fillRect(-c.cx, -c.cy, c.w, c.h))
        },
        debugRender: function(b) {
            this.p.points || a._generatePoints(this), b.save(), this.matrix.setContextTransform(b), b.beginPath(), b.fillStyle = this.p.hit ? "blue" : "red", b.strokeStyle = "#FF0000", b.fillStyle = "rgba(0,0,0,0.5)", b.moveTo(this.p.points[0][0], this.p.points[0][1]);
            for (var c = 0; c < this.p.points.length; c++) b.lineTo(this.p.points[c][0], this.p.points[c][1]);
            if (b.lineTo(this.p.points[0][0], this.p.points[0][1]), b.stroke(), a.debugFill && b.fill(), b.restore(), this.c) {
                var d = this.c;
                b.save(), b.globalAlpha = 1, b.lineWidth = 2, b.strokeStyle = "#FF00FF", b.beginPath(), b.moveTo(d.x - d.cx, d.y - d.cy), b.lineTo(d.x - d.cx + d.w, d.y - d.cy), b.lineTo(d.x - d.cx + d.w, d.y - d.cy + d.h), b.lineTo(d.x - d.cx, d.y - d.cy + d.h), b.lineTo(d.x - d.cx, d.y - d.cy), b.stroke(), b.restore()
            }
        },
        update: function(a) {
            this.trigger("prestep", a), this.step && this.step(a), this.trigger("step", a), this.refreshMatrix(), this.stage && this.children.length > 0 && this.stage.updateSprites(this.children, a, !0), this.p.collisions && (this.p.collisions = [])
        },
        refreshMatrix: function() {
            var a = this.p;
            this.matrix.identity(), this.container && this.matrix.multiply(this.container.matrix), this.matrix.translate(a.x, a.y), a.scale && this.matrix.scale(a.scale, a.scale), this.matrix.rotateDeg(a.angle)
        }
    }), a.Sprite.extend("MovingSprite", {
        init: function(b, c) {
            this._super(a._extend({
                vx: 0,
                vy: 0,
                ax: 0,
                ay: 0
            }, b), c)
        },
        step: function(a) {
            var b = this.p;
            b.vx += b.ax * a, b.vy += b.ay * a, b.x += b.vx * a, b.y += b.vy * a
        }
    }), a
}, Quintus.TMX = function(a) {
    function b(a, b) {
        var c = a.getAttribute(b);
        return isNaN(c) ? c : +c
    }

    function c(a) {
        for (var c = a.querySelectorAll("property"), d = {}, e = 0; e < c.length; e++) {
            var f = c[e];
            d[b(f, "name")] = b(f, "value")
        }
        return d
    }
    a.assetTypes.tmx = "TMX", a.loadAssetTMX = function(b, c, d, e) {
        a.loadAssetOther(b, c, function(a, b) {
            var c = new DOMParser,
                e = c.parseFromString(b, "application/xml");
            d(a, e)
        }, e)
    }, a._tmxExtractAssetName = function(a) {
        var b = a.getAttribute("source"),
            c = b.split("/");
        return c[c.length - 1]
    }, a._tmxExtractSources = function(b) {
        var c = b.querySelectorAll("[source]");
        return a._map(c, a._tmxExtractAssetName)
    }, a.loadTMX = function(b, c, d) {
        a._isString(b) && (b = a._normalizeArg(b));
        var e = [];
        a._each(b, function(b) {
            "tmx" === a._fileExtension(b) && e.push(b)
        });
        var f = [];
        a.load(b, function() {
            a._each(e, function(b) {
                var c = a._tmxExtractSources(a.asset(b));
                f = f.concat(c)
            }), f.length > 0 ? a.load(f, c, d) : c()
        })
    }, a._tmxLoadTilesets = function(d, e) {
        function f(a) {
            var b = a.split(",");
            return [parseFloat(b[0]), parseFloat(b[1])]
        }
        for (var g = [], h = 0; h < d.length; h++) {
            for (var i = d[h], j = b(i, "name"), k = b(i, "firstgid"), l = a._tmxExtractAssetName(i.querySelector("image")), m = {}, n = {
                    tileW: b(i, "tilewidth"),
                    tileH: b(i, "tileheight"),
                    spacingX: b(i, "spacing"),
                    spacingY: b(i, "spacing")
                }, o = i.querySelectorAll("tile"), p = 0; p < o.length; p++) {
                var q = o[p],
                    r = b(q, "id"),
                    s = k + r,
                    t = c(q);
                t.points && (t.points = a._map(t.points.split(" "), f)), e[s] = t, m[r] = t
            }
            n.frameProperties = m, g.push([k, j]), a.sheet(j, l, n)
        }
        return g
    }, a._tmxProcessImageLayer = function(b, d, e, f) {
        var g = a._tmxExtractAssetName(f.querySelector("image")),
            h = c(f);
        h.asset = g, b.insert(new a.Repeater(h))
    }, a._lookupGid = function(a, b) {
        for (var c = 0; b[c + 1] && a >= b[c + 1][0];) c++;
        return b[c]
    }, a._tmxProcessTileLayer = function(d, e, f, g) {
        for (var h, i, j, k = g.querySelectorAll("tile"), l = b(g, "width"), m = b(g, "height"), n = [], o = 0, p = 0; m > p; p++) {
            n[p] = [];
            for (var q = 0; l > q; q++) {
                var r = b(k[o], "gid");
                0 === r ? n[p].push(null) : (i || (h = a._lookupGid(b(k[o], "gid"), e), i = h[0], j = h[1]), n[p].push(r - i)), o++
            }
        }
        var s = a._extend({
                tileW: a.sheet(j).tileW,
                tileH: a.sheet(j).tileH,
                sheet: j,
                tiles: n
            }, c(g)),
            t = s.Class || "TileLayer";
        s.collision ? d.collisionLayer(new a[t](s)) : d.insert(new a[t](s))
    }, a._tmxProcessObjectLayer = function(d, e, f, g) {
        for (var h = g.querySelectorAll("object"), i = 0; i < h.length; i++) {
            var j = h[i],
                k = b(j, "gid"),
                l = b(j, "x"),
                m = b(j, "y"),
                n = f[k],
                o = c(j);
            if (!n) throw "Invalid TMX Object: missing properties for GID:" + k;
            if (!n.Class) throw "Invalid TMX Object: missing Class for GID:" + k;
            var p = n.Class;
            if (!p) throw "Invalid TMX Object Class: " + p + " GID:" + k;
            var q = a._extend(a._extend({
                    x: l,
                    y: m
                }, n), o),
                r = new a[p](q);
            r.p.x += r.p.w / 2, r.p.y -= r.p.h / 2, d.insert(r)
        }
    }, a._tmxProcessors = {
        objectgroup: a._tmxProcessObjectLayer,
        layer: a._tmxProcessTileLayer,
        imagelayer: a._tmxProcessImageLayer
    }, a.stageTMX = function(b, c) {
        var d = a._isString(b) ? a.asset(b) : b,
            e = {},
            f = d.getElementsByTagName("tileset"),
            g = a._tmxLoadTilesets(f, e);
        a._each(d.documentElement.childNodes, function(b) {
            var d = b.tagName;
            a._tmxProcessors[d] && a._tmxProcessors[d](c, g, e, b)
        })
    }
}, Quintus.Touch = function(a) {
    if (a._isUndefined(Quintus.Sprites)) throw "Quintus.Touch requires Quintus.Sprites Module";
    var b = [0],
        c = 0;
    a.Evented.extend("TouchSystem", {
        init: function() {
            var b = this;
            this.boundTouch = function(a) {
                b.touch(a)
            }, this.boundDrag = function(a) {
                b.drag(a)
            }, this.boundEnd = function(a) {
                b.touchEnd(a)
            }, a.el.addEventListener("touchstart", this.boundTouch), a.el.addEventListener("mousedown", this.boundTouch), a.el.addEventListener("touchmove", this.boundDrag), a.el.addEventListener("mousemove", this.boundDrag), a.el.addEventListener("touchend", this.boundEnd), a.el.addEventListener("mouseup", this.boundEnd), a.el.addEventListener("touchcancel", this.boundEnd), this.touchPos = new a.Evented, this.touchPos.grid = {}, this.touchPos.p = {
                w: 1,
                h: 1,
                cx: 0,
                cy: 0
            }, this.activeTouches = {}, this.touchedObjects = {}
        },
        destroy: function() {
            a.el.removeEventListener("touchstart", this.boundTouch), a.el.removeEventListener("mousedown", this.boundTouch), a.el.removeEventListener("touchmove", this.boundDrag), a.el.removeEventListener("mousemove", this.boundDrag), a.el.removeEventListener("touchend", this.boundEnd), a.el.removeEventListener("mouseup", this.boundEnd), a.el.removeEventListener("touchcancel", this.boundEnd)
        },
        normalizeTouch: function(b, c) {
            var d = b.offsetX,
                e = b.offsetY;
            if ((a._isUndefined(d) || a._isUndefined(e)) && (d = b.layerX, e = b.layerY), a._isUndefined(d) || a._isUndefined(e)) {
                if (void 0 === a.touch.offsetX) {
                    a.touch.offsetX = 0, a.touch.offsetY = 0;
                    var f = a.el;
                    do a.touch.offsetX += f.offsetLeft, a.touch.offsetY += f.offsetTop; while (f = f.offsetParent)
                }
                d = b.pageX - a.touch.offsetX, e = b.pageY - a.touch.offsetY
            }
            return this.touchPos.p.ox = this.touchPos.p.px = d / a.cssWidth * a.width, this.touchPos.p.oy = this.touchPos.p.py = e / a.cssHeight * a.height, c.viewport && (this.touchPos.p.px /= c.viewport.scale, this.touchPos.p.py /= c.viewport.scale, this.touchPos.p.px += c.viewport.x, this.touchPos.p.py += c.viewport.y), this.touchPos.p.x = this.touchPos.p.px, this.touchPos.p.y = this.touchPos.p.py, this.touchPos.obj = null, this.touchPos
        },
        touch: function(d) {
            for (var e = d.changedTouches || [d], f = 0; f < e.length; f++)
                for (var g = 0; g < b.length; g++) {
                    var h = e[f],
                        i = a.stage(b[g]);
                    if (i) {
                        h.identifier = h.identifier || 0;
                        var j = this.normalizeTouch(h, i);
                        i.regrid(j, !0);
                        var k, l = i.search(j, c);
                        if ((l || g === b.length - 1) && (k = l && l.obj, j.obj = k, this.trigger("touch", j)), k && !this.touchedObjects[k]) {
                            this.activeTouches[h.identifier] = {
                                x: j.p.px,
                                y: j.p.py,
                                origX: k.p.x,
                                origY: k.p.y,
                                sx: j.p.ox,
                                sy: j.p.oy,
                                identifier: h.identifier,
                                obj: k,
                                stage: i
                            }, this.touchedObjects[k.p.id] = !0, k.trigger("touch", this.activeTouches[h.identifier]);
                            break
                        }
                    }
                }
        },
        drag: function(a) {
            for (var b = a.changedTouches || [a], c = 0; c < b.length; c++) {
                var d = b[c];
                d.identifier = d.identifier || 0;
                var e = this.activeTouches[d.identifier],
                    f = e && e.stage;
                if (e) {
                    var g = this.normalizeTouch(d, f);
                    e.x = g.p.px, e.y = g.p.py, e.dx = g.p.ox - e.sx, e.dy = g.p.oy - e.sy, e.obj.trigger("drag", e)
                }
            }
            a.preventDefault()
        },
        touchEnd: function(a) {
            for (var b = a.changedTouches || [a], c = 0; c < b.length; c++) {
                var d = b[c];
                d.identifier = d.identifier || 0;
                var e = this.activeTouches[d.identifier];
                e && (e.obj.trigger("touchEnd", e), delete this.touchedObjects[e.obj.p.id], this.activeTouches[d.identifier] = null)
            }
            a.preventDefault()
        }
    }), a.touch = function(d, e) {
        return a.untouch(), c = d || a.SPRITE_UI, b = e || [2, 1, 0], a._isArray(b) || (b = [b]), a._touch || (a.touchInput = new a.TouchSystem), a
    }, a.untouch = function() {
        return a.touchInput && (a.touchInput.destroy(), delete a.touchInput), a
    }
}, Quintus.UI = function(a) {
    if (a._isUndefined(Quintus.Touch)) throw "Quintus.UI requires Quintus.Touch Module";
    a.UI = {}, a.UI.roundRect = function(a, b) {
        a.beginPath(), a.moveTo(-b.cx + b.radius, -b.cy), a.lineTo(-b.cx + b.w - b.radius, -b.cy), a.quadraticCurveTo(-b.cx + b.w, -b.cy, -b.cx + b.w, -b.cy + b.radius), a.lineTo(-b.cx + b.w, -b.cy + b.h - b.radius), a.quadraticCurveTo(-b.cx + b.w, -b.cy + b.h, -b.cx + b.w - b.radius, -b.cy + b.h), a.lineTo(-b.cx + b.radius, -b.cy + b.h), a.quadraticCurveTo(-b.cx, -b.cy + b.h, -b.cx, -b.cy + b.h - b.radius), a.lineTo(-b.cx, -b.cy + b.radius), a.quadraticCurveTo(-b.cx, -b.cy, -b.cx + b.radius, -b.cy), a.closePath()
    }, a.UI.Container = a.Sprite.extend("UI.Container", {
        init: function(b, c) {
            var d, e = a._clone(b || {});
            b && a._isString(b.w) && (d = b.w.match(/^[0-9]+%$/)) && (e.w = parseInt(b.w, 10) * a.width / 100, e.x = a.width / 2 - e.w / 2), b && a._isString(b.h) && (d = b.h.match(/^[0-9]+%$/)) && (e.h = parseInt(b.h, 10) * a.height / 100, e.y = a.height / 2 - e.h / 2), this._super(a._defaults(e, c), {
                opacity: 1,
                hidden: !1,
                fill: null,
                highlight: null,
                radius: 5,
                stroke: "#000",
                border: !1,
                shadow: !1,
                shadowColor: !1,
                outlineWidth: !1,
                outlineColor: "#000",
                type: a.SPRITE_NONE
            })
        },
        insert: function(a) {
            return this.stage.insert(a, this), a
        },
        fit: function(a, b) {
            if (0 !== this.children.length) {
                void 0 === a && (a = 0), void 0 === b && (b = a);
                for (var c = 1 / 0, d = 1 / 0, e = -1 / 0, f = -1 / 0, g = 0; g < this.children.length; g++) {
                    var h = this.children[g],
                        i = h.p.x - h.p.cx,
                        j = h.p.y - h.p.cy,
                        k = h.p.x - h.p.cx + h.p.w,
                        l = h.p.y - h.p.cy + h.p.h;
                    c > i && (c = i), d > j && (d = j), k > e && (e = k), l > f && (f = l)
                }
                this.p.cx = -c + b, this.p.cy = -d + a, this.p.w = e - c + 2 * b, this.p.h = f - d + 2 * a
            }
        },
        addShadow: function(b) {
            if (this.p.shadow) {
                var c = a._isNumber(this.p.shadow) ? this.p.shadow : 5;
                b.shadowOffsetX = c, b.shadowOffsetY = c, b.shadowColor = this.p.shadowColor || "rgba(0,0,50,0.1)"
            }
        },
        clearShadow: function(a) {
            a.shadowColor = "transparent"
        },
        drawRadius: function(b) {
            a.UI.roundRect(b, this.p), this.addShadow(b), b.fill(), this.p.border && (this.clearShadow(b), b.lineWidth = this.p.border, b.stroke())
        },
        drawSquare: function(a) {
            this.addShadow(a), this.p.fill && a.fillRect(-this.p.cx, -this.p.cy, this.p.w, this.p.h), this.p.border && (this.clearShadow(a), a.lineWidth = this.p.border, a.strokeRect(-this.p.cx, -this.p.cy, this.p.w, this.p.h))
        },
        draw: function(a) {
            return this.p.hidden ? !1 : ((this.p.border || this.p.fill) && (a.globalAlpha = this.p.opacity, a.fillStyle = 1 === this.p.frame && this.p.highlight ? this.p.highlight : this.p.fill, a.strokeStyle = this.p.stroke, this.p.radius > 0 ? this.drawRadius(a) : this.drawSquare(a)), void 0)
        }
    }), a.UI.Text = a.Sprite.extend("UI.Text", {
        init: function(b, c) {
            this._super(a._defaults(b || {}, c), {
                type: a.SPRITE_UI,
                size: 24
            }), this.p.label && this.calcSize()
        },
        calcSize: function() {
            this.setFont(a.ctx), this.splitLabel = this.p.label.split("\n");
            for (var b = "", c = 0; c < this.splitLabel.length; c++) this.splitLabel[c].length > b.length && (b = this.splitLabel[c]);
            var d = a.ctx.measureText(b);
            this.p.h = (this.p.size || 24) * this.splitLabel.length * 1.2, this.p.w = d.width, this.p.cx = this.p.w / 2, this.p.cy = this.p.h / 2
        },
        prerender: function() {
            this.p.oldLabel !== this.p.label && (this.p.oldLabel = this.p.label, this.calcSize(), this.el.width = this.p.w, this.el.height = 4 * this.p.h, this.ctx.clearRect(0, 0, this.p.w, this.p.h), this.ctx.fillStyle = "#FF0", this.ctx.fillRect(0, 0, this.p.w, this.p.h / 2), this.setFont(this.ctx), this.ctx.fillText(this.p.label, 0, 0))
        },
        draw: function(a) {
            if (0 !== this.p.opacity) {
                this.p.oldLabel !== this.p.label && this.calcSize(), this.setFont(a), void 0 !== this.p.opacity && (a.globalAlpha = this.p.opacity);
                for (var b = 0; b < this.splitLabel.length; b++) "center" === this.p.align ? (this.p.outlineWidth && a.strokeText(this.splitLabel[b], 0, -this.p.cy + b * this.p.size * 1.2), a.fillText(this.splitLabel[b], 0, -this.p.cy + b * this.p.size * 1.2)) : "right" === this.p.align ? (this.p.outlineWidth && a.strokeText(this.splitLabel[b], this.p.cx, -this.p.cy + b * this.p.size * 1.2), a.fillText(this.splitLabel[b], this.p.cx, -this.p.cy + b * this.p.size * 1.2)) : (this.p.outlineWidth && a.strokeText(this.splitLabel[b], -this.p.cx, -this.p.cy + b * this.p.size * 1.2), a.fillText(this.splitLabel[b], -this.p.cx, -this.p.cy + b * this.p.size * 1.2))
            }
        },
        asset: function() {
            return this.el
        },
        setFont: function(a) {
            a.textBaseline = "top", a.font = this.font(), a.fillStyle = this.p.color || "black", a.textAlign = this.p.align || "left", a.strokeStyle = this.p.outlineColor || "black", a.lineWidth = this.p.outlineWidth || 0
        },
        font: function() {
            return this.fontString ? this.fontString : (this.fontString = (this.p.weight || "400") + " " + (this.p.size || 24) + "px " + (this.p.family || "Arial"), this.fontString)
        }
    }), a.UI.Button = a.UI.Container.extend("UI.Button", {
        init: function(b, c, d) {
            if (this._super(a._defaults(b || {}, d), {
                    type: a.SPRITE_UI | a.SPRITE_DEFAULT,
                    keyActionName: null
                }), this.p.label && (!this.p.w || !this.p.h)) {
                a.ctx.save(), this.setFont(a.ctx);
                var e = a.ctx.measureText(this.p.label);
                a.ctx.restore(), this.p.h || (this.p.h = 44), this.p.w || (this.p.w = e.width + 20)
            }
            isNaN(this.p.cx) && (this.p.cx = this.p.w / 2), isNaN(this.p.cy) && (this.p.cy = this.p.h / 2), this.callback = c, this.on("touch", this, "highlight"), this.on("touchEnd", this, "push"), this.p.keyActionName && a.input.on(this.p.keyActionName, this, "push")
        },
        highlight: function() {
            "undefined" != typeof this.sheet() && this.sheet().frames > 1 && (this.p.frame = 1)
        },
        push: function() {
            this.p.frame = 0, this.callback && this.callback(), this.trigger("click")
        },
        draw: function(b) {
            this._super(b), (this.p.asset || this.p.sheet) && a.Sprite.prototype.draw.call(this, b), this.p.label && (b.save(), this.setFont(b), b.fillText(this.p.label, 0, 0), b.restore())
        },
        setFont: function(a) {
            a.textBaseline = "middle", a.font = this.p.font || "400 24px arial", a.fillStyle = this.p.fontColor || "black", a.textAlign = "center"
        }
    }), a.UI.IFrame = a.Sprite.extend("UI.IFrame", {
        init: function(b) {
            this._super(b, {
                opacity: 1,
                type: a.SPRITE_UI | a.SPRITE_DEFAULT
            }), a.wrapper.style.overflow = "hidden", this.iframe = document.createElement("IFRAME"), this.iframe.setAttribute("src", this.p.url), this.iframe.style.position = "absolute", this.iframe.style.zIndex = 500, this.iframe.setAttribute("width", this.p.w), this.iframe.setAttribute("height", this.p.h), this.iframe.setAttribute("frameborder", 0), this.p.background && (this.iframe.style.backgroundColor = this.p.background), a.wrapper.appendChild(this.iframe), this.on("inserted", function(a) {
                this.positionIFrame(), a.on("destroyed", this, "remove")
            })
        },
        positionIFrame: function() {
            var a = this.p.x,
                b = this.p.y;
            this.stage.viewport && (a -= this.stage.viewport.x, b -= this.stage.viewport.y), (this.oldX !== a || this.oldY !== b || this.oldOpacity !== this.p.opacity) && (this.iframe.style.top = b - this.p.cy + "px", this.iframe.style.left = a - this.p.cx + "px", this.iframe.style.opacity = this.p.opacity, this.oldX = a, this.oldY = b, this.oldOpacity = this.p.opacity)
        },
        step: function(a) {
            this._super(a), this.positionIFrame()
        },
        remove: function() {
            this.iframe && (a.wrapper.removeChild(this.iframe), this.iframe = null)
        }
    }), a.UI.HTMLElement = a.Sprite.extend("UI.HTMLElement", {
        init: function(b) {
            this._super(b, {
                opacity: 1,
                type: a.SPRITE_UI
            }), a.wrapper.style.overflow = "hidden", this.el = document.createElement("div"), this.el.innerHTML = this.p.html, a.wrapper.appendChild(this.el), this.on("inserted", function(a) {
                this.position(), a.on("destroyed", this, "remove"), a.on("clear", this, "remove")
            })
        },
        position: function() {},
        step: function(a) {
            this._super(a), this.position()
        },
        remove: function() {
            this.el && (a.wrapper.removeChild(this.el), this.el = null)
        }
    }), a.UI.VerticalLayout = a.Sprite.extend("UI.VerticalLayout", {
        init: function(a) {
            this.children = [], this._super(a, {
                type: 0
            })
        },
        insert: function(a) {
            return this.stage.insert(a, this), this.relayout(), a
        },
        relayout: function() {
            for (var a = 0, b = 0; b < this.children.length; b++) a += this.children[b].p.h || 0;
            this.p.h - a
        }
    })
};
var Stats = function() {
    var a = Date.now(),
        b = a,
        c = 0,
        d = 1 / 0,
        e = 0,
        f = 0,
        g = 1 / 0,
        h = 0,
        i = 0,
        j = 0,
        k = document.createElement("div");
    k.id = "stats", k.addEventListener("mousedown", function(a) {
        a.preventDefault(), s(++j % 2)
    }, !1), k.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
    var l = document.createElement("div");
    l.id = "fps", l.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002", k.appendChild(l);
    var m = document.createElement("div");
    m.id = "fpsText", m.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", m.innerHTML = "FPS", l.appendChild(m);
    var n = document.createElement("div");
    for (n.id = "fpsGraph", n.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff", l.appendChild(n); 74 > n.children.length;) {
        var o = document.createElement("span");
        o.style.cssText = "width:1px;height:30px;float:left;background-color:#113", n.appendChild(o)
    }
    var p = document.createElement("div");
    p.id = "ms", p.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none", k.appendChild(p);
    var q = document.createElement("div");
    q.id = "msText", q.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", q.innerHTML = "MS", p.appendChild(q);
    var r = document.createElement("div");
    for (r.id = "msGraph", r.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0", p.appendChild(r); 74 > r.children.length;) o = document.createElement("span"), o.style.cssText = "width:1px;height:30px;float:left;background-color:#131", r.appendChild(o);
    var s = function(a) {
        switch (j = a) {
            case 0:
                l.style.display = "block", p.style.display = "none";
                break;
            case 1:
                l.style.display = "none", p.style.display = "block"
        }
    };
    return {
        REVISION: 11,
        domElement: k,
        setMode: s,
        begin: function() {
            a = Date.now()
        },
        end: function() {
            var j = Date.now();
            c = j - a, d = Math.min(d, c), e = Math.max(e, c), q.textContent = c + " MS (" + d + "-" + e + ")";
            var k = Math.min(30, 30 - 30 * (c / 200));
            return r.appendChild(r.firstChild).style.height = k + "px", i++, j > b + 1e3 && (f = Math.round(1e3 * i / (j - b)), g = Math.min(g, f), h = Math.max(h, f), m.textContent = f + " FPS (" + g + "-" + h + ")", k = Math.min(30, 30 - 30 * (f / 100)), n.appendChild(n.firstChild).style.height = k + "px", b = j, i = 0), j
        },
        update: function() {
            a = this.end()
        }
    }
};
! function() {
    var a = {},
        b = null,
        c = !0,
        d = !1;
    if ("undefined" != typeof AudioContext) b = new AudioContext;
    else if ("undefined" != typeof webkitAudioContext) b = new webkitAudioContext;
    else if ("undefined" != typeof Audio) {
        c = !1;
        try {
            new Audio
        } catch (e) {
            d = !0
        }
    } else c = !1, d = !0;
    if (c) {
        var f = "undefined" == typeof b.createGain ? b.createGainNode() : b.createGain();
        f.gain.value = 1, f.connect(b.destination)
    }
    var g = function() {
        this._volume = 1, this._muted = !1, this.usingWebAudio = c, this.noAudio = d, this._howls = []
    };
    g.prototype = {
        volume: function(a) {
            var b = this;
            if (a = parseFloat(a), a >= 0 && 1 >= a) {
                b._volume = a, c && (f.gain.value = a);
                for (var d in b._howls)
                    if (b._howls.hasOwnProperty(d) && b._howls[d]._webAudio === !1)
                        for (var e = 0; e < b._howls[d]._audioNode.length; e++) b._howls[d]._audioNode[e].volume = b._howls[d]._volume * b._volume;
                return b
            }
            return c ? f.gain.value : b._volume
        },
        mute: function() {
            return this._setMuted(!0), this
        },
        unmute: function() {
            return this._setMuted(!1), this
        },
        _setMuted: function(a) {
            var b = this;
            b._muted = a, c && (f.gain.value = a ? 0 : b._volume);
            for (var d in b._howls)
                if (b._howls.hasOwnProperty(d) && b._howls[d]._webAudio === !1)
                    for (var e = 0; e < b._howls[d]._audioNode.length; e++) b._howls[d]._audioNode[e].muted = a
        }
    };
    var h = new g,
        i = null;
    if (!d) {
        i = new Audio;
        var j = {
            mp3: !!i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            m4a: !!(i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(i.canPlayType("audio/x-mp4;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        }
    }
    var k = function(a) {
        var b = this;
        b._autoplay = a.autoplay || !1, b._buffer = a.buffer || !1, b._duration = a.duration || 0, b._format = a.format || null, b._loop = a.loop || !1, b._loaded = !1, b._sprite = a.sprite || {}, b._src = a.src || "", b._pos3d = a.pos3d || [0, 0, -.5], b._volume = void 0 !== a.volume ? a.volume : 1, b._urls = a.urls || [], b._rate = a.rate || 1, b._onload = [a.onload || function() {}], b._onloaderror = [a.onloaderror || function() {}], b._onend = [a.onend || function() {}], b._onpause = [a.onpause || function() {}], b._onplay = [a.onplay || function() {}], b._onendTimer = [], b._webAudio = c && !b._buffer, b._audioNode = [], b._webAudio && b._setupAudioNode(), h._howls.push(b), b.load()
    };
    if (k.prototype = {
            load: function() {
                var b = this,
                    c = null;
                if (d) return b.on("loaderror"), void 0;
                for (var e = 0; e < b._urls.length; e++) {
                    var f, g;
                    if (b._format) f = b._format;
                    else {
                        if (g = b._urls[e].toLowerCase().split("?")[0], f = g.match(/.+\.([^?]+)(\?|$)/), f = f && f.length >= 2 ? f : g.match(/data\:audio\/([^?]+);/), !f) return b.on("loaderror"), void 0;
                        f = f[1]
                    }
                    if (j[f]) {
                        c = b._urls[e];
                        break
                    }
                }
                if (!c) return b.on("loaderror"), void 0;
                if (b._src = c, b._webAudio) l(b, c);
                else {
                    var i = new Audio;
                    b._audioNode.push(i), i.src = c, i._pos = 0, i.preload = "auto", i.volume = h._muted ? 0 : b._volume * h.volume(), a[c] = b;
                    var k = function() {
                        b._duration = Math.ceil(10 * i.duration) / 10, 0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
                            _default: [0, 1e3 * b._duration]
                        }), b._loaded || (b._loaded = !0, b.on("load")), b._autoplay && b.play(), i.removeEventListener("canplaythrough", k, !1)
                    };
                    i.addEventListener("canplaythrough", k, !1), i.load()
                }
                return b
            },
            urls: function(a) {
                var b = this;
                return a ? (b.stop(), b._urls = "string" == typeof a ? [a] : a, b._loaded = !1, b.load(), b) : b._urls
            },
            play: function(a, c) {
                var d = this;
                return "function" == typeof a && (c = a), a && "function" != typeof a || (a = "_default"), d._loaded ? d._sprite[a] ? (d._inactiveNode(function(e) {
                    e._sprite = a;
                    var f, g = e._pos > 0 ? e._pos : d._sprite[a][0] / 1e3,
                        i = d._sprite[a][1] / 1e3 - e._pos,
                        j = !(!d._loop && !d._sprite[a][2]),
                        k = "string" == typeof c ? c : Math.round(Date.now() * Math.random()) + "";
                    if (function() {
                            var b = {
                                id: k,
                                sprite: a,
                                loop: j
                            };
                            f = setTimeout(function() {
                                !d._webAudio && j && d.stop(b.id, b.timer).play(a, b.id), d._webAudio && !j && (d._nodeById(b.id).paused = !0, d._nodeById(b.id)._pos = 0), d._webAudio || j || d.stop(b.id, b.timer), d.on("end", k)
                            }, 1e3 * i), d._onendTimer.push(f), b.timer = d._onendTimer[d._onendTimer.length - 1]
                        }(), d._webAudio) {
                        var l = d._sprite[a][0] / 1e3,
                            m = d._sprite[a][1] / 1e3;
                        e.id = k, e.paused = !1, n(d, [j, l, m], k), d._playStart = b.currentTime, e.gain.value = d._volume, "undefined" == typeof e.bufferSource.start ? e.bufferSource.noteGrainOn(0, g, i) : e.bufferSource.start(0, g, i)
                    } else {
                        if (4 !== e.readyState) return d._clearEndTimer(f),
                            function() {
                                var b = d,
                                    f = a,
                                    g = c,
                                    h = e,
                                    i = function() {
                                        b.play(f, g), h.removeEventListener("canplaythrough", i, !1)
                                    };
                                h.addEventListener("canplaythrough", i, !1)
                            }(), d;
                        e.id = k, e.currentTime = g, e.muted = h._muted, e.volume = d._volume * h.volume(), setTimeout(function() {
                            e.play()
                        }, 0)
                    }
                    return d.on("play"), "function" == typeof c && c(k), d
                }), d) : ("function" == typeof c && c(), d) : (d.on("load", function() {
                    d.play(a, c)
                }), d)
            },
            pause: function(a, b) {
                var c = this;
                if (!c._loaded) return c.on("play", function() {
                    c.pause(a)
                }), c;
                c._clearEndTimer(b || 0);
                var d = a ? c._nodeById(a) : c._activeNode();
                if (d)
                    if (d._pos = c.pos(null, a), c._webAudio) {
                        if (!d.bufferSource || d.paused) return c;
                        d.paused = !0, "undefined" == typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                    } else d.pause();
                return c.on("pause"), c
            },
            stop: function(a, b) {
                var c = this;
                if (!c._loaded) return c.on("play", function() {
                    c.stop(a)
                }), c;
                c._clearEndTimer(b || 0);
                var d = a ? c._nodeById(a) : c._activeNode();
                if (d)
                    if (d._pos = 0, c._webAudio) {
                        if (!d.bufferSource || d.paused) return c;
                        d.paused = !0, "undefined" == typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                    } else d.pause(), d.currentTime = 0;
                return c
            },
            mute: function(a) {
                var b = this;
                if (!b._loaded) return b.on("play", function() {
                    b.mute(a)
                }), b;
                var c = a ? b._nodeById(a) : b._activeNode();
                return c && (b._webAudio ? c.gain.value = 0 : c.volume = 0), b
            },
            unmute: function(a) {
                var b = this;
                if (!b._loaded) return b.on("play", function() {
                    b.unmute(a)
                }), b;
                var c = a ? b._nodeById(a) : b._activeNode();
                return c && (b._webAudio ? c.gain.value = b._volume : c.volume = b._volume), b
            },
            volume: function(a, b) {
                var c = this;
                if (a = parseFloat(a), a >= 0 && 1 >= a) {
                    if (c._volume = a, !c._loaded) return c.on("play", function() {
                        c.volume(a, b)
                    }), c;
                    var d = b ? c._nodeById(b) : c._activeNode();
                    return d && (c._webAudio ? d.gain.value = a : d.volume = a * h.volume()), c
                }
                return c._volume
            },
            loop: function(a) {
                var b = this;
                return "boolean" == typeof a ? (b._loop = a, b) : b._loop
            },
            sprite: function(a) {
                var b = this;
                return "object" == typeof a ? (b._sprite = a, b) : b._sprite
            },
            pos: function(a, c) {
                var d = this;
                if (!d._loaded) return d.on("load", function() {
                    d.pos(a)
                }), "number" == typeof a ? d : d._pos || 0;
                a = parseFloat(a);
                var e = c ? d._nodeById(c) : d._activeNode();
                if (e) return a >= 0 ? (d.pause(c), e._pos = a, d.play(e._sprite, c), d) : d._webAudio ? e._pos + (b.currentTime - d._playStart) : e.currentTime;
                if (a >= 0) return d;
                for (var f = 0; f < d._audioNode.length; f++)
                    if (d._audioNode[f].paused && 4 === d._audioNode[f].readyState) return d._webAudio ? d._audioNode[f]._pos : d._audioNode[f].currentTime
            },
            pos3d: function(a, b, c, d) {
                var e = this;
                if (b = "undefined" != typeof b && b ? b : 0, c = "undefined" != typeof c && c ? c : -.5, !e._loaded) return e.on("play", function() {
                    e.pos3d(a, b, c, d)
                }), e;
                if (!(a >= 0 || 0 > a)) return e._pos3d;
                if (e._webAudio) {
                    var f = d ? e._nodeById(d) : e._activeNode();
                    f && (e._pos3d = [a, b, c], f.panner.setPosition(a, b, c))
                }
                return e
            },
            fade: function(a, b, c, d, e) {
                var f = this,
                    g = Math.abs(a - b),
                    h = a > b ? "down" : "up",
                    i = g / .01,
                    j = c / i;
                if (!f._loaded) return f.on("load", function() {
                    f.fade(a, b, c, d, e)
                }), f;
                f.volume(a, e);
                for (var k = 1; i >= k; k++) ! function() {
                    var a = f._volume + ("up" === h ? .01 : -.01) * k,
                        c = Math.round(1e3 * a) / 1e3,
                        g = b;
                    setTimeout(function() {
                        f.volume(c, e), c === g && d && d()
                    }, j * k)
                }()
            },
            fadeIn: function(a, b, c) {
                return this.volume(0).play().fade(0, a, b, c)
            },
            fadeOut: function(a, b, c, d) {
                var e = this;
                return e.fade(e._volume, a, b, function() {
                    c && c(), e.pause(d), e.on("end")
                }, d)
            },
            _nodeById: function(a) {
                for (var b = this, c = b._audioNode[0], d = 0; d < b._audioNode.length; d++)
                    if (b._audioNode[d].id === a) {
                        c = b._audioNode[d];
                        break
                    }
                return c
            },
            _activeNode: function() {
                for (var a = this, b = null, c = 0; c < a._audioNode.length; c++)
                    if (!a._audioNode[c].paused) {
                        b = a._audioNode[c];
                        break
                    }
                return a._drainPool(), b
            },
            _inactiveNode: function(a) {
                for (var b = this, c = null, d = 0; d < b._audioNode.length; d++)
                    if (b._audioNode[d].paused && 4 === b._audioNode[d].readyState) {
                        a(b._audioNode[d]), c = !0;
                        break
                    }
                if (b._drainPool(), !c) {
                    var e;
                    b._webAudio ? (e = b._setupAudioNode(), a(e)) : (b.load(), e = b._audioNode[b._audioNode.length - 1], e.addEventListener("loadedmetadata", function() {
                        a(e)
                    }))
                }
            },
            _drainPool: function() {
                var a, b = this,
                    c = 0;
                for (a = 0; a < b._audioNode.length; a++) b._audioNode[a].paused && c++;
                for (a = b._audioNode.length - 1; a >= 0 && !(5 >= c); a--) b._audioNode[a].paused && (b._webAudio && b._audioNode[a].disconnect(0), c--, b._audioNode.splice(a, 1))
            },
            _clearEndTimer: function(a) {
                var b = this,
                    c = b._onendTimer.indexOf(a);
                c = c >= 0 ? c : 0, b._onendTimer[c] && (clearTimeout(b._onendTimer[c]), b._onendTimer.splice(c, 1))
            },
            _setupAudioNode: function() {
                var a = this,
                    c = a._audioNode,
                    d = a._audioNode.length;
                return c[d] = "undefined" == typeof b.createGain ? b.createGainNode() : b.createGain(), c[d].gain.value = a._volume, c[d].paused = !0, c[d]._pos = 0, c[d].readyState = 4, c[d].connect(f), c[d].panner = b.createPanner(), c[d].panner.setPosition(a._pos3d[0], a._pos3d[1], a._pos3d[2]), c[d].panner.connect(c[d]), c[d]
            },
            on: function(a, b) {
                var c = this,
                    d = c["_on" + a];
                if ("function" == typeof b) d.push(b);
                else
                    for (var e = 0; e < d.length; e++) b ? d[e].call(c, b) : d[e].call(c);
                return c
            },
            off: function(a, b) {
                for (var c = this, d = c["_on" + a], e = b.toString(), f = 0; f < d.length; f++)
                    if (e === d[f].toString()) {
                        d.splice(f, 1);
                        break
                    }
                return c
            },
            unload: function() {
                for (var b = this, c = b._audioNode, d = 0; d < b._audioNode.length; d++) c[d].paused || b.stop(c[d].id), b._webAudio ? c[d].disconnect(0) : c[d].src = "";
                var e = h._howls.indexOf(b);
                null !== e && e >= 0 && h._howls.splice(e, 1), delete a[b._src], b = null
            }
        }, c) var l = function(c, d) {
            if (d in a) c._duration = a[d].duration, m(c);
            else {
                var e = new XMLHttpRequest;
                e.open("GET", d, !0), e.responseType = "arraybuffer", e.onload = function() {
                    b.decodeAudioData(e.response, function(b) {
                        b && (a[d] = b, m(c, b))
                    }, function() {
                        c.on("loaderror")
                    })
                }, e.onerror = function() {
                    c._webAudio && (c._buffer = !0, c._webAudio = !1, c._audioNode = [], delete c._gainNode, c.load())
                };
                try {
                    e.send()
                } catch (f) {
                    e.onerror()
                }
            }
        },
        m = function(a, b) {
            a._duration = b ? b.duration : a._duration, 0 === Object.getOwnPropertyNames(a._sprite).length && (a._sprite = {
                _default: [0, 1e3 * a._duration]
            }), a._loaded || (a._loaded = !0, a.on("load")), a._autoplay && a.play()
        },
        n = function(c, d, e) {
            var f = c._nodeById(e);
            f.bufferSource = b.createBufferSource(), f.bufferSource.buffer = a[c._src], f.bufferSource.connect(f.panner), f.bufferSource.loop = d[0], d[0] && (f.bufferSource.loopStart = d[1], f.bufferSource.loopEnd = d[1] + d[2]), f.bufferSource.playbackRate.value = c._rate
        };
    "function" == typeof define && define.amd && define(function() {
        return {
            Howler: h,
            Howl: k
        }
    }), "undefined" != typeof exports && (exports.Howler = h, exports.Howl = k), window.Howler = h, window.Howl = k
}(),
function() {
    window.Game = {
        initEngine: function() {
            return this.Q = Quintus({
                development: !0
            }), this.Q.include("Sprites, Scenes, Input, Touch, UI, 2D, Anim"), Game.inited = !1
        },
        init: function() {
            var a;
            a = this.Q, Game.inited = !0, a.setup("quintus", {
                maximize: !0,
                upsampleWidth: 640,
                upsampleHeight: 320
            }), a.controls().touch(), a.input.disableTouchControls(), Game.storageKeys = {
                availableLevel: "zombieGame:availableLevel",
                levelProgress: "zombieGame:levelProgress"
            }, Game.availableLevel = localStorage.getItem(Game.storageKeys.availableLevel) || 1, this.SPRITE_NONE = 0, this.SPRITE_PLAYER = 1, this.SPRITE_TILES = 2, this.SPRITE_ENEMY = 4, this.SPRITE_BULLET = 8, this.SPRITE_PLAYER_COLLECTIBLE = 16, this.SPRITE_HUMAN = 32, this.SPRITE_ZOMBIE_PLAYER = 64, this.SPRITE_ALL = 65535, this.prepareAssets(), this.initStats(), this.initUnloadEvent(), a.tilePos = function(b, c, d) {
                var e;
                return null == d && (d = {}), e = {
                    x: b * Game.assets.map.tileSize + Game.assets.map.tileSize / 2,
                    y: c * Game.assets.map.tileSize + Game.assets.map.tileSize / 2
                }, a._extend(e, d)
            }
        },



// DATA ASSETS

        prepareAssets: function() {
            var a, b;
            return this.assets = {
                characters: {
                    dataAsset: "characters.json",
                    sheet: "characters.png"
                },
                items: {
                    dataAsset: "items.json",
                    sheet: "items.png"
                },
                hud: {
                    dataAsset: "hud.json",
                    sheet: "hud.png"
                },
                others: {
                    dataAsset: "others.json",
                    sheet: "others.png"
                },
                bullet: {
                    dataAsset: "bullet.json",
                    sheet: "bullet.png"
                },
                map: {
                    sheet: "map_tiles.png"
                },
                gradient: "gradient-top.png",
                level1: {
                    dataAsset: "level1.tmx"
                },
                level2: {
                    dataAsset: "level2.tmx"
                },
                level3: {
                    dataAsset: "level3.tmx"
                },
                level4: {
                    dataAsset: "level4.tmx"
                },
                level5: {
                    dataAsset: "level5.tmx"
                },
                 level6: {
                    dataAsset: "level6.tmx"
                },
                level7: {
                    dataAsset: "level7.tmx"
                    
                },
                level8: {
                    dataAsset: "level8.tmx"
                    
                },
                level9: {
                    dataAsset: "level9.tmx"
                    
                },
                level10: {
                    dataAsset: "level10.tmx"
                    
                }
                

// LOAD SOUNDFILES


            }, this.audio = {
                zombieMode: "zombie_mode.mp3",
                playerBg: "player_bg.mp3",
                zombieNotice: "zombie_notice.mp3",
                gunShot: "gun_shot.mp3",
                collected: "collected.mp3",
                playerHit: "player_hit.mp3",
                humanCreated: "human_created.mp3"
                
                
                
                
                
                
            }, Game.isMuted = !1, Game.isPaused = !1, Game.isPausedByClick = !1, a = [], this.objValueToArray(this.assets, a), this.assets.map.sheetName = "tiles", this.assets.map.tileSize = 70, b = [], this.objValueToArray(this.audio, b), this.assets.all = a.concat(b)
        },
        objValueToArray: function(a, b) {
            var c, d, e;
            e = [];
            for (c in a) d = a[c], "string" == typeof d ? e.push(b.push(d)) : e.push(this.objValueToArray(d, b));
            return e
        },
        initStats: function() {
            var a;
            return this.Q.stats = a = new Stats, a.setMode(0)
        },
        load: function() {
            var a;
            return a = this.Q, a.load(Game.assets.all, function() {
                return a.sheet(Game.assets.map.sheetName, Game.assets.map.sheet, {
                    tileW: Game.assets.map.tileSize,
                    tileH: Game.assets.map.tileSize
                }), a.compileSheets(Game.assets.characters.sheet, Game.assets.characters.dataAsset), a.compileSheets(Game.assets.items.sheet, Game.assets.items.dataAsset), a.compileSheets(Game.assets.hud.sheet, Game.assets.hud.dataAsset), a.compileSheets(Game.assets.others.sheet, Game.assets.others.dataAsset), a.compileSheets(Game.assets.bullet.sheet, Game.assets.bullet.dataAsset), Game.stageStartScreen()
            }, {
                progressCallback: function(a, b) {
                    var c, d;
                    return d = document.getElementById("loading-progress"), d.style.width = Math.floor(a / b * 100) + "%", a === b ? (c = document.getElementById("loading"), c.parentNode.removeChild(c)) : void 0
                }
            })
        },




// DEFAULT LEVEL SETTINGS


        stageLevel: function(a) {
            var b;
            return null == a && (a = 1), b = this.Q, b.state.reset({
                enemiesCounter: 0,
                lives: 7,
                bullets: 0,
                hasKey: !1,
                hasGun: !1,
                currentLevel: a
            }), Game.currentLevelData = {
                zombies: {
                    healed: 0,
                    available: 0
                },
                
                
                
// LETS TRY CATS                
                   cats: {
                    healed: 0,
                    available: 0
                },
                
                
                
                
                health: {
                    collected: 0,
                    available: 0
                },
                bullets: {
                    waisted: 0,
                    available: 0
                },
                zombieModeFound: !1
            }, b.input.touchControls(), b.clearStages(), b.stageScene("level" + a, {
                sort: !0
            }), b.stageScene("hud", 1, {
                sort: !0
            }), Game.infoLabel.intro(), Game.currentScreen = "level" + a
        },
        stageLevelSelectScreen: function() {
            return this.Q.input.disableTouchControls(), this.Q.state.set("currentLevel", 0), this.Q.clearStages(), this.Q.stageScene("levelSelect"), Game.currentScreen = "levelSelect"
        },
        stageEndLevelScreen: function() {
            return this.Q.input.disableTouchControls(), this.Q.clearStages(), this.Q.stageScene("levelSummary", Game.currentLevelData), Game.currentScreen = "levelSummary for level" + this.Q.state.get("currentLevel")
        },
        stageStartScreen: function() {
            return this.Q.clearStages(), this.Q.stageScene("start"), Game.currentScreen = "start"
        },
        stageEndScreen: function() {
            return this.Q.input.disableTouchControls(), this.Q.clearStages(), this.Q.stageScene("end"), Game.currentScreen = "end", Game.trackEvent("End Screen", "displayed")
        },
        stageControlsScreen: function() {
            return this.Q.clearStages(), this.Q.stageScene("controls"), Game.currentScreen = "controls"
        },
        stageGameOverScreen: function() {
            return this.Q.clearStages(), this.Q.stageScene("gameOver"), Game.currentScreen = "gameOver", Game.trackEvent("Game Over Screen", "displayed")
        },
        setCameraTo: function(a, b) {
            return a.follow(b, {
                x: !0,
                y: !0
            }, {
                minX: 0,
                maxX: Game.map.p.w,
                minY: 0,
                maxY: Game.map.p.h
            })
        },





// PAUSE AND UNPAUSE 
 
 
        pauseGame: function() {
            var a, b;
            if (!Game.isPaused) return null != (a = this.Q.stage()) && a.pause(), null != (b = this.Q.AudioManager) && b.stopAll(), Game.isPaused = !0
        },
        unpauseGame: function() {
            var a, b;
            if (Game.isPaused !== !1) return null != (a = this.Q.stage()) && a.unpause(), Game.isMuted || null != (b = this.Q.AudioManager) && b.playAll(), Game.isPaused = !1
        },










        isCorrectDeviceOrientation: function() {
            return window.innerHeight <= window.innerWidth ? !0 : !1
        },
        toggleWrongOrientationScreen: function(a) {
            var b, c, d;
            if (null == a && (a = !0), d = document.getElementById("wrong-orientation"), b = document.getElementById("quintus_container"), c = document.getElementById("loading"), a) {
                if (d.style.display = "block", null != b && (b.style.display = "none"), null != c && (c.style.display = "none"), !Game.isPausedByClick) return Game.pauseGame()
            } else if (d.style.display = "none", null != b && (b.style.display = "block"), null != c && (c.style.display = "block"), !Game.isPausedByClick) return Game.unpauseGame()
        },
   
   
   
   
   
   
   //     trackEvent: function(a, b, c, d) {
  //  WTF DOES THIS DO? IS THIS GOOGLE ANALYTICS ?     
  //   return null == c ? ga("send", "event", a, b) : null == d ? ga("send", "event", a, b, c.toString()) : ga("send", "event", a, b, c.toString(), parseInt(d, 10))
//   },
     
     
     
        initUnloadEvent: function() {
            return window.addEventListener("beforeunload", function() {
                return Game.trackEvent("Unload", "Current Screen", Game.currentScreen)
            })
        }
    }, Game.initEngine(), Game.isCorrectDeviceOrientation() ? (Game.init(), Game.load()) : Game.toggleWrongOrientationScreen(), window.onresize = function() {
        return Game.isCorrectDeviceOrientation() ? Game.toggleWrongOrientationScreen(!1) : Game.toggleWrongOrientationScreen(), Game.isCorrectDeviceOrientation() && Game.inited === !1 ? (Game.init(), Game.load()) : void 0
    }
}.call(this),
    function() {
        var a;
        a = Game.Q, a.AudioManager = {
            collection: [],
            muted: !1,
            add: function(b, c) {
                var d, e, f;
                return e = a.asset(b), f = {
                    audioKey: b,
                    audioObj: e,
                    options: c
                }, (null != c ? c.loop : void 0) === !0 && (e._loop = !0, d = this.find(b), d === !1 && this.collection.push(f)), this.muted ? void 0 : e.play()
            },
            remove: function(a) {
                var b;
                return b = null, b = this.find(a), b >= 0 ? (this.collection[b].audioObj.stop(), this.collection.splice(b, 1)) : void 0
            },
            find: function(a) {
                var b, c, d, e, f;
                for (f = this.collection, b = d = 0, e = f.length; e > d; b = ++d)
                    if (c = f[b], c.audioKey === a) return b;
                return !1
            },
            playAll: function() {
                var a, b, c, d, e;
                for (d = this.collection, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.audioObj.stop(), e.push(a.audioObj.play());
                return e
            },
            stopAll: function() {
                var a, b, c, d, e;
                for (d = this.collection, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.audioObj.stop());
                return e
            },
            clear: function() {
                return this.collection = []
            },
            mute: function() {
                return this.muted = !0, this.stopAll()
            },
            unmute: function() {
                return this.muted = !1, this.playAll()
            }
        }
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.component("gun", {
            added: function() {
                var b;
                return a.input.on("fire", this.entity, "fireGun"), b = this.entity.p, b.sheet = "player_with_gun", b.sprite = "playerWithGun", this.entity.play("stand"), a.state.get("bullets") > 0 && (b.noOfBullets = a.state.get("bullets")), b.nextFireTimeout = 0
            },
            destroyed: function() {
                return a.input.off("fire", this.entity)
            },
            extend: {
                gunStep: function(a) {
                    return this.p.nextFireTimeout > 0 ? this.p.nextFireTimeout = Math.max(this.p.nextFireTimeout - a, 0) : void 0
                },
                fireGun: function() {
                    var b, c;
 
 
 // GUN SPEED  AND   BULLET DISPLAY   AND  BULLET LIMIT REACHED
 
                    return 0 === this.p.nextFireTimeout && (this.p.nextFireTimeout = .03, this.p.noOfBullets > 0 ? (c = "left" === this.p.direction ? -8 : 15, a.AudioManager.add(Game.audio.gunShot), b = this.stage.insert(new a.Bullet({
                        x: this.p.x + c,
                        y: this.p.y + 3,
                        direction: this.p.direction
                    }))) : Game.infoLabel.outOfBullets(), this.p.noOfBullets > 0 && (this.p.noOfBullets -= 1), this.p.noOfBullets >= 0) ? a.state.set("bullets", this.p.noOfBullets) : void 0
                }
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.component("zombieAI", {
            added: function() {
                var a;
                return a = this.entity.p, a.vx = a.startLeft === !0 || "true" === a.startLeft ? 60 : -60, a.audioTimeout = 0
            },
            extend: {
                zombieStep: function(b) {
                    var c, d, e;
     
     
     //  ZOMBIE TURN AROUND TIME
     
     
                    return this.canSeeThePlayer(), this.canSeeThePlayerObj.status ? (this.p.canSeeThePlayerTimeout = 0.28, this.canSeeThePlayerObj.playAudio && 0 === this.p.audioTimeout && (a.AudioManager.add(Game.audio.zombieNotice), this.play("attack", 10), this.p.audioTimeout = 10), (this.canSeeThePlayerObj.left && this.p.vx > 0 || this.canSeeThePlayerObj.right && this.p.vx < 0) && (this.p.vx = -this.p.vx)) : this.p.canSeeThePlayerTimeout = Math.max(this.p.canSeeThePlayerTimeout - b, 0), this.p.audioTimeout = Math.max(this.p.audioTimeout - b, 0), c = this.p.vx / Math.abs(this.p.vx), d = a.stage().locate(this.p.x, this.p.y + this.p.h / 2 + 1, Game.SPRITE_TILES), e = a.stage().locate(this.p.x + c * this.p.w / 2 + c, this.p.y + this.p.h / 2 + 1, Game.SPRITE_TILES), e || !d || this.canSeeThePlayerObj.status || 0 !== this.p.canSeeThePlayerTimeout || (this.p.vx = -this.p.vx), this.flip()
                },
                flip: function() {
                    return this.p.flip = this.p.vx > 0 ? !1 : "x"
                },
                canSeeThePlayer: function() {
                    var a, b, c, d, e, f;
                    f = Game.player.p, d = 350, e = this.canSeeThePlayerObj, this.canSeeThePlayerObj = {
                        playAudio: !0,
                        status: !1
                    }, (null != e ? e.status : void 0) === !0 && (this.canSeeThePlayerObj.playAudio = !1), null == Game.player.isDestroyed && (c = f.y > this.p.y - 10 && f.y < this.p.y + 10, this.canSeeThePlayerObj.left = a = f.x > this.p.x - d && f.x < this.p.x, this.canSeeThePlayerObj.right = b = f.x < this.p.x + d && f.x > this.p.x, c && (a || b) ? this.canSeeThePlayerObj.status = !0 : (this.canSeeThePlayerObj.status = !1, this.canSeeThePlayerObj.playAudio = !0))
                }
            }
        })
    }.call(this),




// HOW TO PLAY SCREEN


    function() {
        var a;
        a = Game.Q, a.scene("controls", function(b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
            return n = .25 * a.height, m = 20, k = 8, i = 3, g = (100 - 2 * m - (i - 1) * k) / i, l = a.width * m * .01, j = a.width * k * .01, h = a.width * g * .01, a.AudioManager.stopAll(), a.AudioManager.clear(), b.insert(new a.UI.Text({
                x: a.width / 2,
                y: n / 2,
                label: "How to play",
                color: "#ffffff",
                family: "Roboto",
                size: 40
            })), d = b.insert(new a.UI.Container({
                x: l + h / 2,
                y: a.height / 2
            })), e = b.insert(new a.UI.Container({
                x: d.p.x + j + h,
                y: a.height / 2
            })), f = b.insert(new a.UI.Container({
                x: e.p.x + j + h,
                y: a.height / 2
            })), o = d.insert(new a.UI.Text({
                x: 0,
                y: -140,
                label: "1",
                color: "#ffffff",
                family: "Roboto",
                size: 60
            })), p = d.insert(new a.UI.Text({
                x: 0,
                y: -100,
                label: "Move with arrows",
                color: "#ffffff",
                family: "Roboto",
                size: 35
            })), a.touchDevice ? d.insert(new a.Sprite({
                x: 0,
                y: 0,
                sheet: "ui_controls_1_mobile"
            })) : d.insert(new a.Sprite({
                x: 0,
                y: 0,
                sheet: "ui_controls_1"
            })), e.insert(new a.UI.Text({
                x: 0,
                y: o.p.y,
                label: "2",
                color: "#ffffff",
                family: "Roboto",
                size: 60
            })), e.insert(new a.UI.Text({
                x: 0,
                y: p.p.y,
                label: "Find Pulse Gun",
                color: "#ffffff",
                family: "Roboto",
                size: 35
            })), e.insert(new a.Sprite({
                x: 0,
                y: 0,
                sheet: "ui_controls_2"
            })), f.insert(new a.UI.Text({
                x: 0,
                y: o.p.y,
                label: "3",
                color: "#ffffff",
                family: "Roboto",
                size: 60
            })), f.insert(new a.UI.Text({
                x: 0,
                y: p.p.y,
                label: "Fire your Weapon!",
                color: "#ffffff",
                family: "Roboto",
                size: 35
            })), a.touchDevice ? f.insert(new a.Sprite({
                x: 0,
                y: 0,
                sheet: "ui_controls_3_mobile"
            })) : f.insert(new a.Sprite({
                x: 0,
                y: 0,
                sheet: "ui_controls_3"
            })), c = b.insert(new a.UI.Button({
                x: a.width / 2,
                y: a.height - n,
                w: a.width / 2,
                h: 70,
                fill: "#cdcdcd",
                radius: 33,
                fontColor: "#000",
                font: "300 58px Roboto",
                label: "Start your escape",
                keyActionName: "confirm",
                type: a.SPRITE_UI | a.SPRITE_DEFAULT
            })), c.on("click", function() {
                return Game.stageLevel(1)
            })
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.scene("end", function(b) {
            var c, d;
 
 
 // CHANGE GAME OVER MUSIC
            return d = .25 * a.height, a.AudioManager.stopAll(), b.insert(new a.UI.Text({
                x: a.width / 2,
                y: d / 2,
                label: "The End",
                color: "#ffffff",
                family: "Roboto",
                size: 90
            })), b.insert(new a.UI.Text({
                x: a.width / 2,
                y: a.height / 2,
                label: "You lived to see another day. Congratulations. \n Thanks for playing.",
                color: "#ffffff",
                family: "Roboto",
                size: 36,
                align: "center"
            })), c = b.insert(new a.UI.Button({
                x: a.width / 2,
                y: a.height - d / 2,
                w: a.width / 3,
                h: 70,
                fill: "#000000",
                radius: 10,
                fontColor: "#ffffff",
                font: "400 38px Roboto",
                label: "Back to all levels",
                keyActionName: "confirm",
                type: a.SPRITE_UI | a.SPRITE_DEFAULT
            })), c.on("click", function() {
                return Game.stageLevelSelectScreen()
            })
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.scene("gameOver", function(b) {
            var c, d;
            return d = .25 * a.height, a.AudioManager.stopAll(), b.insert(new a.UI.Text({
                x: a.width / 2,
                y: d / 2,
                label: "Game Over",
                color: "#ffffff",
                family: "Roboto",
                size: 150
            })), b.insert(new a.UI.Text({
                x: a.width / 2,
                y: a.height / 2,
                label: "You failed to escape and died\n",
                color: "#fffff",
                family: "Roboto",
                size: 106,
                align: "center"
            })), c = b.insert(new a.UI.Button({
                x: a.width / 2,
                y: a.height - d / 2,
                w: a.width / 3,
                h: 70,
                fill: "#000000",
                radius: 10,
                fontColor: "#ffffff",
                font: "400 58px Roboto",
                label: "Try again",
                keyActionName: "confirm",
                type: a.SPRITE_UI | a.SPRITE_DEFAULT
            })), c.on("click", function() {
                return Game.stageLevelSelectScreen()
            })
        })
    }.call(this),




//  HEALTH AND BULLETS AND LIVES COUNTER AND GRAPHIC


    function() {
        var a;
        a = Game.Q, a.scene("hud", function(b) {
            var c, d, e, f, g, h, i, j, k;
            return b.insert(new a.UI.LinearGradient), Game.playerAvatar = k = b.insert(new a.UI.PlayerAvatar({
                z: 10
            })), h = b.insert(new a.UI.Container({
                y: 40,
                z: 10,
                fill: "#fff"
            })), Game.infoLabel = h.insert(new a.UI.InfoLabel({
                container: h,
                offsetLeft: k.p.w
            })), e = b.insert(new a.UI.Container({
                y: 40,
                z: 10,
                fill: "#232322"
     
     
     
  // ZOMBIE COUNTER SIZE   
     
            })), e.insert(new a.UI.EnemiesCounter), e.fit(0, 8), e.p.x = a.width - e.p.w / 155 - 60, b.insert(new a.UI.EnemiesAvatar({
                z: 12
            })), c = b.insert(new a.UI.Container({
                y: 40,
                z: 10,
                fill: "#232322"
            })), d = c.insert(new a.UI.BulletsImg), c.insert(new a.UI.BulletsCounter({
                img: d.p
            })), c.fit(0, 40), c.p.x = e.p.x - e.p.w / 2 - c.p.w / 2 - 20 + 30, f = b.insert(new a.UI.Container({
                y: 40,
                z: 10,
                fill: "#232322"
            })), Game.healthImg = g = f.insert(new a.UI.HealthImg), f.insert(new a.UI.HealthCounter({
                img: g.p
            })), f.fit(0, 8), f.p.x = c.p.x - c.p.w / 2 - f.p.w / 2 - 20, i = b.insert(new a.UI.Container({
                y: 40,
                z: 10,
                fill: "#232322"
            })), j = i.insert(new a.UI.InventoryKey), i.fit(5, 8), i.p.x = f.p.x - f.p.w / 2 - i.p.w / 2 - 34, b.insert(new a.UI.PauseButton), b.insert(new a.UI.MenuButton)
        })
    }.call(this),





//
// LEVEL 1
//




    function() {
        var a;
        a = Game.Q, a.scene("level1", function(b) {
            var c, d, e, f, g;
            return Game.map = f = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level1.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(f), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level1.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1

// PLAYER START POSITION

            }), b.insert(c), Game.player = g = b.insert(new a.Player(a.tilePos(3.5, 9))), b.add("viewport"), Game.setCameraTo(b, g), d = [
              
              
// ENEMY AND ITEM POSITION   first number is horizontal second vertical              
              
                ["Zombie", a.tilePos(14, 9)],
                ["Zombie", a.tilePos(15, 9)],
                ["Zombie", a.tilePos(7, 9)],
                ["Zombie", a.tilePos(6, 9)],
                ["Zombie", a.tilePos(2, 15)],
                ["Zombie", a.tilePos(8, 15)],
                ["Zombie", a.tilePos(9, 15)],
                ["Zombie", a.tilePos(13, 15)],
                ["Zombie", a.tilePos(18, 15)],
                ["Zombie", a.tilePos(2, 0)]
            ], b.loadAssets(d), e = [

// SPECIFIC KEY LOCATION

                ["Key", a.tilePos(14.5, 9)],
                ["Door", a.tilePos(98, 9)],
                ["Gun", a.tilePos(14.5, 3, {
                    bullets: 500
                })],
                ["Health", a.tilePos(14.5, 15)]
            ], b.loadAssets(e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),





//
// LEVEL 2
//





    function() {
        var a;
        a = Game.Q, a.scene("level2", function(b) {
            var c, d, e, f, g, h, i;
            return Game.map = f = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level2.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(f), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level2.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), Game.player = g = b.insert(new a.Player(a.tilePos(2.5, 9))), b.add("viewport"), Game.setCameraTo(b, g), d = [
              
//   NORMAL KIND OF ENEMY POSITION
       
                ["Zombie", a.tilePos(2, 6)],
                ["Zombie", a.tilePos(8, 6)],
                ["Zombie", a.tilePos(7, 6)],
                ["Zombie", a.tilePos(13, 6)],
                ["Zombie", a.tilePos(19, 3)],
                ["Zombie", a.tilePos(22, 2)],
                ["Zombie", a.tilePos(29, 3)],
                ["Zombie", a.tilePos(35, 7)],
                ["Zombie", a.tilePos(39, 9)],
                ["Zombie", a.tilePos(42, 6)],
              
             
// SPECIFIC KIND ENEMY POSITION     
              
                ["Zombie", a.tilePos(8, 12, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(20, 6, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(21, 12)]
            ], b.loadAssets(d), i = [{
                health: a.tilePos(14.5, 15),
                key: a.tilePos(14.5, 3)
            }, {
                health: a.tilePos(14.5, 3),
                key: a.tilePos(14.5, 15)
            }], h = Math.floor(2 * Math.random()), e = [


// RANDOM KEY LOCATION  sometimes nothing shows up

//                ["Key", i[h].key],
  
  
                ["Key", a.tilePos(43, 13)],
                ["Door", a.tilePos(49, 13)],
                ["Gun", a.tilePos(14.5, 9, {
                    bullets: 500
                })],
                ["Health", i[h].health]
            ], b.loadAssets(e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),




//
// LEVEL 3
//


    function() {
        var a;
        a = Game.Q, a.scene("level3", function(b) {
            var c, d, e, f, g, h;
            return Game.map = e = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level3.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(e), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level3.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), Game.player = f = b.insert(new a.Player(a.tilePos(24.5, 14))), b.add("viewport"), Game.setCameraTo(b, f), e.addObjectsToStage({
 
 
// WHAT DOES THIS DO ? 
 
                skip: ["Key", "Door"]
            }), h = [{
                door: a.tilePos(46.5, 14),
                key: a.tilePos(2.5, 14)
            }, {
                door: a.tilePos(2.5, 14),
                key: a.tilePos(46.5, 14)
            }], g = Math.floor(2 * Math.random()), d = [




              ["Gun", a.tilePos(10, 9, {
                    bullets: 500
                })],
   
 // RANDOM KEY AND RANDOM DOOR    
   
                ["Key", h[g].key],
                ["Door", h[g].door]
            ], b.loadAssets(d), Game.currentLevelData.health.available = null != b.lists.Health ? b.lists.Health.length : 0, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),



//
//  LEVEL 4
//


    function() {
        var a;
        a = Game.Q, a.scene("level4", function(b) {
            var c, d, e;
            return Game.map = d = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level4.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(d), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level4.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), d.addObjectsToStage(), Game.player = e = b.insert(new a.Player(a.tilePos(3, 23))), b.add("viewport"), Game.setCameraTo(b, e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),
   
   
//   
// LEVEL 5   
//   
   
    function() {
        var a;
        a = Game.Q, a.scene("level5", function(b) {
            var c, d, e, f, g, h;
            return Game.map = f = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level5.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(f), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level5.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), Game.player = g = b.insert(new a.Player(a.tilePos(49.5, 21))), b.add("viewport"), Game.setCameraTo(b, g), f.addObjectsToStage({
                skip: ["Key", "Door", "Health"]
            }), d = [{
                door: a.tilePos(50, 3),
                sign: a.tilePos(48, 3),
                key: a.tilePos(49.5, 39),
                health1: a.tilePos(5, 21),
                health2: a.tilePos(94, 21)
            }, {
                door: a.tilePos(49, 39),
                sign: a.tilePos(51, 39),
                key: a.tilePos(49.5, 3),
                health1: a.tilePos(5, 21),
                health2: a.tilePos(94, 21)
            }, {
                door: a.tilePos(4, 21),
                sign: a.tilePos(6, 21),
                key: a.tilePos(94, 21),
                health1: a.tilePos(49.5, 39),
                health2: a.tilePos(49.5, 3)
            }, {
                door: a.tilePos(95, 21),
                sign: a.tilePos(93, 21),
                key: a.tilePos(5, 21),
                health1: a.tilePos(49.5, 39),
                health2: a.tilePos(49.5, 3)
            }], h = Math.floor(4 * Math.random()), e = [
                ["Key", d[h].key],
                ["Door", d[h].door],
                ["ExitSign", d[h].sign],
                ["Health", d[h].health1],
                ["Health", d[h].health2],
                ["Health", a.tilePos(4.5, 6)],
                ["Health", a.tilePos(94.5, 7)]
            ], b.loadAssets(e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),


//
// LEVEL 6
//

    function() {
        var a;
        a = Game.Q, a.scene("level6", function(b) {
            var c, d, e;
            return Game.map = d = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level6.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(d), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level6.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), d.addObjectsToStage(), Game.player = e = b.insert(new a.Player(a.tilePos(3, 3))), b.add("viewport"), Game.setCameraTo(b, e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),



//
// LEVEL 7
//

     function() {
        var a;
        a = Game.Q, a.scene("level7", function(b) {
            var c, d, e;
            return Game.map = d = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level7.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(d), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level7.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), d.addObjectsToStage(), Game.player = e = b.insert(new a.Player(a.tilePos(3, 3))), b.add("viewport"), Game.setCameraTo(b, e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),
  
  
  
  
//  
// LEVEL 8
//




    function() {
        var a;
        a = Game.Q, a.scene("level8", function(b) {
            var c, d, e, f, g, h, i;
            return Game.map = f = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level8.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(f), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level8.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), Game.player = g = b.insert(new a.Player(a.tilePos(2.5, 9))), b.add("viewport"), Game.setCameraTo(b, g), d = [
              
//   NORMAL KIND OF ENEMY POSITION
       
                ["Zombie", a.tilePos(2, 6)],
                ["Zombie", a.tilePos(8, 6)],
                ["Zombie", a.tilePos(7, 6)],
                ["Zombie", a.tilePos(13, 6)],
                ["Zombie", a.tilePos(19, 3)],
                ["Zombie", a.tilePos(22, 2)],
                ["Zombie", a.tilePos(29, 3)],
                ["Zombie", a.tilePos(35, 7)],
                ["Zombie", a.tilePos(39, 9)],
                ["Zombie", a.tilePos(42, 6)],
              
              
// SPECIFIC KIND ENEMY POSITION     
              
                ["Zombie", a.tilePos(8, 12, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(20, 6, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(21, 12)]
            ], b.loadAssets(d), i = [{
                health: a.tilePos(14.5, 15),
                key: a.tilePos(14.5, 3)
            }, {
                health: a.tilePos(14.5, 3),
                key: a.tilePos(14.5, 15)
            }], h = Math.floor(2 * Math.random()), e = [


// RANDOM KEY LOCATION  sometimes nothing shows up

//                ["Key", i[h].key],
  
  
                ["Key", a.tilePos(41, 13)],
                ["Door", a.tilePos(49, 13)],
                ["Gun", a.tilePos(14.5, 9, {
                    bullets: 500
                })],
                ["Health", i[h].health]
            ], b.loadAssets(e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),






//
// LEVEL 9
//


    function() {
        var a;
        a = Game.Q, a.scene("level9", function(b) {
            var c, d, e, f, g, h, i;
            return Game.map = f = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level9.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(f), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level9.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), Game.player = g = b.insert(new a.Player(a.tilePos(2.5, 9))), b.add("viewport"), Game.setCameraTo(b, g), d = [
              
//   NORMAL KIND OF ENEMY POSITION
       
                ["Zombie", a.tilePos(2, 6)],
                ["Zombie", a.tilePos(8, 6)],
                ["Zombie", a.tilePos(7, 6)],
                ["Zombie", a.tilePos(13, 6)],
                ["Zombie", a.tilePos(19, 3)],
                ["Zombie", a.tilePos(22, 2)],
                ["Zombie", a.tilePos(29, 3)],
                ["Zombie", a.tilePos(35, 7)],
                ["Zombie", a.tilePos(39, 9)],
                ["Zombie", a.tilePos(42, 6)],
              
              
// SPECIFIC KIND ENEMY POSITION     
              
                ["Zombie", a.tilePos(8, 12, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(20, 6, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(21, 12)]
            ], b.loadAssets(d), i = [{
                health: a.tilePos(14.5, 15),
                key: a.tilePos(14.5, 3)
            }, {
                health: a.tilePos(14.5, 3),
                key: a.tilePos(14.5, 15)
            }], h = Math.floor(2 * Math.random()), e = [


// RANDOM KEY LOCATION  sometimes nothing shows up

//                ["Key", i[h].key],
  
  
                ["Key", a.tilePos(41, 13)],
                ["Door", a.tilePos(218, 8)],
                ["Gun", a.tilePos(14.5, 9, {
                    bullets: 500
                })],
                ["Health", i[h].health]
            ], b.loadAssets(e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),



  
  
  
  
// 
// LEVEL 10
//




    function() {
        var a;
        a = Game.Q, a.scene("level10", function(b) {
            var c, d, e, f, g, h, i;
            return Game.map = f = new a.TileLayer({
                type: Game.SPRITE_TILES,
                layerIndex: 0,
                dataAsset: Game.assets.level10.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 2
            }), b.collisionLayer(f), c = new a.TileLayer({
                layerIndex: 1,
                type: Game.SPRITE_NONE,
                dataAsset: Game.assets.level10.dataAsset,
                sheet: Game.assets.map.sheetName,
                tileW: Game.assets.map.tileSize,
                tileH: Game.assets.map.tileSize,
                z: 1
            }), b.insert(c), Game.player = g = b.insert(new a.Player(a.tilePos(2.5, 9))), b.add("viewport"), Game.setCameraTo(b, g), d = [
              
//   NORMAL KIND OF ENEMY POSITION
       
                ["Zombie", a.tilePos(2, 6)],
                ["Zombie", a.tilePos(8, 6)],
                ["Zombie", a.tilePos(7, 6)],
                ["Zombie", a.tilePos(13, 6)],
                ["Zombie", a.tilePos(19, 3)],
                ["Zombie", a.tilePos(22, 2)],
                ["Zombie", a.tilePos(29, 3)],
                ["Zombie", a.tilePos(35, 7)],
                ["Zombie", a.tilePos(39, 9)],
                ["Zombie", a.tilePos(42, 6)],
                
                
                
                 ["Zombie", a.tilePos(2, 97)],
                  ["Zombie", a.tilePos(4, 97)],
                   ["Zombie", a.tilePos(6, 97)],
                    ["Zombie", a.tilePos(8, 97)],
                     ["Zombie", a.tilePos(16, 97)],
                      ["Zombie", a.tilePos(20, 97)],
                       ["Zombie", a.tilePos(22, 97)],
                        ["Zombie", a.tilePos(29, 97)],
                         ["Zombie", a.tilePos(31, 97)],
                          ["Zombie", a.tilePos(39, 97)],
                
              
              
// SPECIFIC KIND ENEMY POSITION     
              
                ["Zombie", a.tilePos(8, 12, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(20, 6, {
                    startLeft: !0
                })],
                ["Zombie", a.tilePos(21, 12)]
            ], b.loadAssets(d), i = [{
                health: a.tilePos(14.5, 15),
                key: a.tilePos(14.5, 3)
            }, {
                health: a.tilePos(14.5, 3),
                key: a.tilePos(14.5, 15)
            }], h = Math.floor(2 * Math.random()), e = [


// RANDOM KEY LOCATION  sometimes nothing shows up

//                ["Key", i[h].key],
  
  
                ["Key", a.tilePos(46, 98)],
                ["Door", a.tilePos(3, 25)],
                ["Gun", a.tilePos(15, 9, {
                    bullets: 1500
                })],
                ["Health", i[h].health]
            ], b.loadAssets(e), Game.currentLevelData.health.available = b.lists.Health.length, Game.currentLevelData.zombies.available = b.lists.Zombie.length
        })
    }.call(this),
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// LEVEL SELECT THING what does it do?  
    
    function() {
        var a;
        a = Game.Q, a.scene("levelSelect", function(b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D;
            
            
            
            
// THE NUMBER AT THE END CONTROLS NUMBER OF LEVELS IN LEVEL SELECT SCREEN (one less that the number of levels)      
//  g is the number of level icons in one row
      
            
            for (a.AudioManager.stopAll(), a.AudioManager.clear(), s = 20, u = 20, k = 8, m = 14, g = 5, e = (100 - 2 * s - (g - 1) * k) / g, r = a.width * s * .01, j = a.width * k * .01, f = a.width * e * .01, t = a.height * u * .01, l = a.height * m * .01, v = .22 * a.height, A = r + f / 2, B = t + v / 2, z = f, n = v, p = C = 0; 9 >= C; p = ++C)
                if (p % g === 0 && (A = r + f / 2, p > 0 && (B += v + l)), i = p + 1 <= Game.availableLevel ? !0 : !1, h = b.insert(new a.UI.Container({
                        x: A,
                        y: B
                    })), A += f + j, h.insert(new a.UI.LevelButton({
                        level: p + 1,
                        x: 0,
                        y: 0,
                        w: z,
                        h: n,
                        enabled: i
                    })), q = p + 1, w = localStorage.getItem(Game.storageKeys.levelProgress + ":" + q))
                    for (x = -60, y = [34, 50, 40], o = D = 1; w >= 1 ? w >= D : D >= w; o = w >= 1 ? ++D : --D) h.insert(new a.UI.LevelScoreImgSmall({
                        x: x,
                        y: y[o - 1]
                    })), x += 60;
            return b.insert(new a.UI.Text({
                x: a.width / 2,
                y: t / 2,
                label: "Choose your path",
                color: "#fff",
                family: "Roboto",
                size: 60
            })), d = b.insert(new a.UI.Authors), c = b.insert(new a.UI.AudioButton({
                y: t / 2
            })), c.p.x = a.width - r - c.p.w / 2
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.scene("levelSummary", function(b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
            for (o = .25 * a.height, n = 20, j = 8, g = 2, e = (100 - 2 * n - (g - 1) * j) / g, m = a.width * n * .01, i = a.width * j * .01, f = a.width * e * .01, a.AudioManager.stopAll(), b.insert(new a.UI.Text({
                    x: a.width / 2,
                    y: o / 2,
                    label: "You survived another night",
                    color: "#ffffff",
                    family: "Roboto",
                    size: 100
                })), u = b.insert(new a.UI.Container({
                    x: m + f / 2,
                    y: a.height / 2
                })), l = 50, b.options.health && u.insert(new a.UI.Text({
                    x: 0,
                    y: 2 * -l,
                    label: "HP collected: " + b.options.health.collected + "/" + b.options.health.available,
                    color: "#ffffff",
                    family: "Roboto",
                    size: 36
                })), b.options.zombies && u.insert(new a.UI.Text({
                    x: 0,
                    y: -l,
                    label: "Souls healed: " + b.options.zombies.healed + "/" + b.options.zombies.available,
                    color: "#ffffff",
                    family: "Roboto",
                    size: 36
                })), b.options.bullets && u.insert(new a.UI.Text({
                    x: 0,
                    y: 0,
                    label: "Bullets wasted: " + b.options.bullets.waisted + "/" + b.options.bullets.available,
                    color: "#ffffff",
                    family: "Roboto",
                    size: 36
                })), null != b.options.zombieModeFound && u.insert(new a.UI.Text({
                    x: 0,
                    y: l,
                    label: "Got poisoned: " + (b.options.zombieModeFound ? "done" : "yeah"),
                    color: "#ffffff",
                    family: "Roboto",
                    size: 36
                })), d = b.insert(new a.UI.Button({
                    y: a.height - o,
                    w: a.width / 4,
                    h: 70,
                    fill: "#c4da4a",
                    radius: 10,
                    fontColor: "#ffffff",
                    font: "400 58px Roboto",
                    label: "Play next",
                    keyActionName: "confirm",
                    type: a.SPRITE_UI | a.SPRITE_DEFAULT
                })), d.p.x = a.width / 2 + d.p.w / 2 + 40, d.on("click", function() {
                    return 7 === a.state.get("currentLevel") ? (Game.stageEndScreen(), void 0) : Game.stageLevel(a.state.get("currentLevel") + 1)
                }), c = b.insert(new a.UI.Button({
                    y: a.height - o,
                    w: a.width / 4,
                    h: 70,
                    fill: "#000000",
                    radius: 10,
                    fontColor: "#ffffff",
                    font: "400 58px Roboto",
                    label: "Try Again",
                    type: a.SPRITE_UI | a.SPRITE_DEFAULT
                })), c.p.x = a.width / 2 - c.p.w / 2 - 40, c.on("click", function() {
                    return Game.stageLevelSelectScreen()
           
           
           
           
           
           
           //  LOAD A BUNCH OF STUFF
           
                }), a.state.get("currentLevel") >= Game.availableLevel && (Game.availableLevel = a.state.get("currentLevel") + 1, localStorage.setItem(Game.storageKeys.availableLevel, Game.availableLevel)), q = b.options.zombies.healed / b.options.zombies.available, s = 0, s = .5 >= q ? 1 : q > .5 && .9 > q ? 2 : 3, p = localStorage.getItem(Game.storageKeys.levelProgress + ":" + a.state.get("currentLevel")), s > p && localStorage.setItem(Game.storageKeys.levelProgress + ":" + a.state.get("currentLevel"), s), t = b.insert(new a.UI.Container({
                    x: u.p.x + i + f,
                    y: a.height / 2
                })), v = -100, k = w = 1; 3 >= w; k = ++w) h = s >= k ? !1 : !0, r = t.insert(new a.UI.LevelScoreImg({
                x: v,
                y: -l / 2,
                empty: h
            })), v += r.p.w + 20;
            return Game.trackEvent("levelSummary:" + a.state.get("currentLevel"), "score", q), Game.trackEvent("levelSummary:" + a.state.get("currentLevel"), "stars", s), Game.trackEvent("levelSummary:" + a.state.get("currentLevel"), "Zombie Mode", b.options.zombieModeFound), Game.trackEvent("levelSummary:" + a.state.get("currentLevel"), "Health collected", b.options.health.collected + "/" + b.options.health.available), Game.trackEvent("levelSummary:" + a.state.get("currentLevel"), "Zombies healed", b.options.zombies.healed + "/" + b.options.zombies.available), Game.trackEvent("levelSummary:" + a.state.get("currentLevel"), "Bullets waisted", b.options.bullets.waisted + "/" + b.options.bullets.available)
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.scene("start", function(b) {
            var c, d, e;
            return e = b.insert(new a.UI.Container({
                x: a.width / 2,
                y: a.height / 2
            })), e.insert(new a.UI.Text({
                x: 0,
                y: -100,
                label: "Final Pressure",
                color: "#ff700e",
                family: "Roboto",
                size: 70
      
//   SUBTITLE   CURRENTLY DEACTIVATED
      
            })), e.insert(new a.UI.Text({
                x: 0,
                y: -40,
                label: "",
                color: "#f00",
                family: "Roboto",
                size: 35
            })), e.fit(), c = b.insert(new a.UI.Authors), d = e.insert(new a.UI.Button({
                x: 0,
                y: 80,
                w: a.width / 3,
                h: 60,
                fill: "#fff",
                radius: 10,
                fontColor: "#000000",
                font: "400 48px Roboto",
                label: "Start Game",
                keyActionName: "confirm",
                type: a.SPRITE_UI | a.SPRITE_DEFAULT
            })), d.on("click", function() {
                return Game.stageLevelSelectScreen()
            })
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.Sprite.extend("Background", {
            init: function(b) {
                var c;
                return this._super(b, {
                    x: 0,
                    y: 0,
                    z: 0,
                    asset: Game.assets.map.bg,
                    type: a.SPRITE_NONE
                }), this.imgEl = this.asset(), c = this.imgEl.width / this.imgEl.height, this.imgEl.width = a.width + 10, this.imgEl.height = this.imgEl.width * c, this.p.deltaX = (this.imgEl.width - a.width) / 2, this.p.deltaY = (this.imgEl.height - a.height) / 2
            },
            draw: function(b) {
                var c, d, e;
                return e = this.stage.viewport, e ? (c = e.centerX - a.width / 2, d = e.centerY - a.height / 2) : (c = 0, d = 0), b.drawImage(this.imgEl, c - this.p.deltaX, d - this.p.deltaY, this.imgEl.width, this.imgEl.height)
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.animations("deadZombie", {
            intro: {
                frames: [16, 17, 18, 19, 20, 21],
                rate: 1 / 3,
                next: "stand"
            },
            stand: {
                frames: [21],
                rate: 1
            }
        }), a.Sprite.extend("DeadZombie", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    vx: 0,
                    z: 18,
                    sheet: "zombie",
                    sprite: "deadZombie",
                    type: Game.SPRITE_NONE,
                    collisionMask: Game.SPRITE_TILES
                }), this.add("2d, animation"), this.play("intro")
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.animations("human", {
            intro: {
                frames: [0, 1, 2, 3],
       
// ZOMBIE DEATH ANIMATION SPEED     
       
                rate: .24,
                next: "stand"
            },
            stand: {
                frames: [4, 5, 6],
                rate: 1 / 3
            },
            outro: {
                frames: [3, 2, 1, 0],
                rate: .8,
                loop: !1,
                trigger: "outro"
            }
        }), a.Sprite.extend("Human", {
            init: function(b) {
                return this._super(b, {
                    x: 0,
                    y: 0,
                    vx: 0,
                    z: 20,
                    timeInvincible: 4,
                    sheet: "human",
                    sprite: "human",
                    type: Game.SPRITE_HUMAN,
                    collisionMask: Game.SPRITE_TILES,
                    sensor: !0
                }), this.add("2d, animation"), this.play("intro"), a.AudioManager.add(Game.audio.humanCreated), this.on("sensor", this, "sensor"), this.on("outro", this, "die")
            },
            step: function(a) {
                return this.p.timeInvincible > 0 ? this.p.timeInvincible = Math.max(this.p.timeInvincible - a, 0) : void 0
            },
            sensor: function(a) {
                return a.isA("Zombie") && 0 === this.p.timeInvincible && (a.play("attack", 10), this.play("outro")), a.isA("ZombiePlayer") ? (this.play("outro"), this.p.zombiePlayerSensor = !0) : void 0
            },
            die: function() {
                var b, c;
                return this.destroy(), b = Math.floor(2 * Math.random()), c = this.stage.insert(new a.Zombie({
                    x: this.p.x,
                    y: this.p.y,
                    startLeft: b
                })), this.p.zombiePlayerSensor ? void 0 : c.p.wasHuman = !0
            }
        })
    }.call(this),



// PLAYER ANIMATION


    function() {
        var a;
        a = Game.Q, a.animations("player", {
            stand: {
                frames: [1],
                rate: 1
            },
            run: {
                frames: [0, 1, 2, 1],
                rate: .25
            },
            hit: {
                frames: [1],
                loop: !1,
                rate: 1,
                next: "stand"
            },
            jump: {
                frames: [3, 4, 5, 4],
                rate: 1 / 3
            }
        }), a.animations("playerWithGun", {
            stand: {
                frames: [1],
                rate: 1
            },
            run: {
                frames: [0, 1, 2, 1],
                rate: .25
            },
            hit: {
                frames: [3],
                loop: !1,
                rate: 1,
                next: "stand"
            },
            jump: {
                frames: [3],
                rate: 1
            }



//  PLAYER STANDARD VALUES


        }), a.Sprite.extend("Player", {
            init: function(b) {
                return this._super(b, {
                    lifePoints: a.state.get("lives"),
                    timeInvincible: 0,
                    timeToNextSave: 0,
                    x: 0,
                    y: 0,
                    z: 100,
                    savedPosition: {},
                    hasKey: !1,
                    sheet: "player",
                    sprite: "player",
                    type: Game.SPRITE_PLAYER,
                    collisionMask: Game.SPRITE_TILES | Game.SPRITE_ENEMY | Game.SPRITE_PLAYER_COLLECTIBLE
        
        
//  PLAYER SPEED     AND   JUMP SPEED    MUST BE 660 TO REACH PLATFORMS
        
        
                }), this.add("2d, platformerControls, animation"), a.state.get("hasGun") && this.add("gun"), this.p.jumpSpeed = -660, this.p.speed = 447, this.p.savedPosition.x = this.p.x, this.p.savedPosition.y = this.p.y, a.AudioManager.add(Game.audio.playerBg, {
                    loop: !0
                }), this.on("bump.left, bump.right, bump.bottom, bump.top", this, "collision"), this.on("player.outOfMap", this, "restore")
            },
            step: function(a) {
                return "left" === this.p.direction && (this.p.flip = "x", this.p.points = [
                    [-15, -50],
                    [25, -50],
                    [25, 50],
                    [-15, 50]
                ]), "right" === this.p.direction && (this.p.flip = !1, this.p.points = [
                    [-25, -50],
                    [15, -50],
                    [15, 50],
                    [-25, 50]
                ]), this.p.x > Game.map.p.w && (this.p.x = Game.map.p.w), this.p.x < 0 && (this.p.x = 0), this.p.timeToNextSave > 0 && (this.p.timeToNextSave = Math.max(this.p.timeToNextSave - a, 0)), 0 === this.p.timeToNextSave && (this.savePosition(), this.p.timeToNextSave = 2), this.p.timeInvincible > 0 && (this.p.timeInvincible = Math.max(this.p.timeInvincible - a, 0)), this.p.vy > 1100 && (this.p.willBeDead = !0), this.p.willBeDead && this.p.vy < 1100 && (this.updateLifePoints(), this.p.willBeDead = !1), this.p.y > Game.map.p.h && (this.p.outOfMap = !0, this.updateLifePoints(), this.trigger("player.outOfMap"), this.p.willBeDead = !1), 0 !== this.p.vy ? this.play("jump") : 0 !== this.p.vx ? this.play("run") : this.play("stand"), null != this.gunStep ? this.gunStep(a) : void 0
            },
 
 
 
 
// COLLISION STUFF FROM ENEMY
 
            collision: function(a) {
                return a.obj.isA("Zombie") && 0 === this.p.timeInvincible ? (this.updateLifePoints(), a.obj.play("attack", 10), this.p.timeInvincible = 1) : void 0
            },
            savePosition: function() {
                var b, c;
                return b = this.p.vx / Math.abs(this.p.vx), c = a.stage().locate(this.p.x, this.p.y + this.p.h / 2 + 1, Game.SPRITE_TILES), c ? (this.p.savedPosition.x = this.p.x, this.p.savedPosition.y = this.p.y) : void 0
            },
            updateLifePoints: function(b) {
                var c, d = this;
                if (null != b) this.p.lifePoints += b;
                else {
  
  
  
// HOW MANY LIFE POINTS To TAKE AWAY WHEN HIT
  
                    if (this.p.lifePoints -= 1, Game.infoLabel.lifeLost(), this.play("hit", 1), a.AudioManager.add(Game.audio.playerHit), this.p.lifePoints <= 0) {
                        if (this.p.wasZombie || this.p.outOfMap || this.p.willBeDead) return this.destroy(), Game.stageGameOverScreen(), void 0;
                        c = this.stage.insert(new a.ZombiePlayer({
                            x: function() {
                                return d.p.y > Game.map.p.h ? d.p.savedPosition.x : d.p.x
                            }(),
                            y: function() {
                                return d.p.y > Game.map.p.h ? d.p.savedPosition.y : d.p.y
                            }()
                        })), Game.setCameraTo(this.stage, c), c.p.direction = this.p.direction, this.destroy()
                    }
                    1 === this.p.lifePoints && Game.infoLabel.lifeLevelLow()
                }
                return a.state.set("lives", this.p.lifePoints)
            },
            restore: function() {
                return this.p.outOfMap = !1, this.p.x = this.p.savedPosition.x, this.p.y = this.p.savedPosition.y
            }
        })
    }.call(this),
    function() {
        var a;


// ENEMY ANIMATION


        a = Game.Q, a.animations("zombie", {
            run: {
                frames: [0, 1, 2, 3],


// INDIVIDUAL RATE CAN BE SET

                rate: .29
            },
            hit: {
                frames: [10],
                loop: !1,
                rate: 1,
                next: "run"
            },
            attack: {
                frames: [8, 9, 10, 11],
                loop: !1,
                rate: .22,
                next: "run"
            },
            fall: {
                frames: [4, 5, 6, 7, 7, 7, 7],
                rate: .2,
                loop: !1,
                next: "run"
            }
        }), 
        
        
//  ENEMY SETTINGS AND ENEMY HIT POINTS      
        
        a.Sprite.extend("Zombie", {
            init: function(b) {
                return this._super(b, {
                    lifePoints: 25,
                    x: 0,
                    y: 0,
                    vx: 0,
                    z: 20,
                    sheet: "zombie",
                    sprite: "zombie",
                    canSeeThePlayerTimeout: 0,
                    type: Game.SPRITE_ENEMY,
                    collisionMask: Game.SPRITE_TILES | Game.SPRITE_PLAYER | Game.SPRITE_BULLET | Game.SPRITE_HUMAN
                }), a.state.inc("enemiesCounter", 1), this.add("2d, animation, zombieAI"), this.on("hit", this, "collision"), this.on("bump.right", this, "hitFromRight"), this.on("bump.left", this, "hitFromLeft")
            },
            collision: function(a) {
                return a.obj.isA("Bullet") ? (this.play("hit"), this.decreaseLifePoints()) : void 0
            },
            hitFromRight: function(a) {
                return this.p.vx = a.impact
            },
            hitFromLeft: function(a) {
                return this.p.vx = -a.impact
            },
            step: function(a) {
                return null != this.zombieStep && this.zombieStep(a), this.p.y > Game.map.p.h && this.die(!1), 0 !== this.p.vy ? this.play("fall") : this.play("run")
            },
            decreaseLifePoints: function() {
                return this.p.lifePoints -= 1, this.p.lifePoints <= 0 ? this.die() : void 0
            },
            die: function(b) {
                return null == b && (b = !0), this.destroy(), !this.p.wasHuman && b ? this.stage.insert(new a.Human({
                    x: this.p.x,
                    y: this.p.y
                })) : this.stage.insert(new a.DeadZombie({
                    x: this.p.x,
                    y: this.p.y
                })), a.state.dec("enemiesCounter", 1)
            }
        })
    }.call(this),
    function() {
        var a;
  
  
  
// POISONED PLAYER ANIMATION  
  
        a = Game.Q, a.animations("zombiePlayer", {
            stand: {
                frames: [4],


// RATE IS LOWER BECAUSE PLAYER POISONED

                rate: 1
            },
            run: {
                frames: [3, 4, 5, 4],
                rate: 1 / 3
            },
            jump: {
                frames: [3],
                rate: 1
            },
            intro: {
                frames: [0, 1, 0, 1, 0, 1],
                rate: .8,
                next: "stand",
                trigger: "ready"
            }
        }), 
        
        
 //  ZOMBIE MODE SETTINGS      
        
        
        a.Sprite.extend("ZombiePlayer", {
            init: function(a) {
                return this._super(a, {
                    timeToNextSave: 0,
                    x: 0,
                    y: 0,
                    z: 100,
                    savedPosition: {},
                    sheet: "zombie_player",
                    sprite: "zombiePlayer",
                    type: Game.SPRITE_ZOMBIE_PLAYER,
                    collisionMask: Game.SPRITE_TILES | Game.SPRITE_HUMAN
                }), this.add("2d, animation"), this.p.jumpSpeed = -500, this.p.speed = 140, this.p.savedPosition.x = this.p.x, this.p.savedPosition.y = this.p.y, this.p.playerDirection = this.p.direction, Game.infoLabel.zombieModeOn(), this.play("intro", 10), this.on("player.outOfMap", this, "die"), this.on("ready", this, "enableZombieMode")
            },


//  ZOMBIE MODE SETTINGS SOUND

            enableZombieMode: function() {
                return this.add("platformerControls"), this.p.direction = this.p.playerDirection, Game.infoLabel.zombieModeOnNext(), Game.currentLevelData.zombieModeFound = !0, Game.playerAvatar.changeToZombie(), Game.healthImg.changeToHalf(), a.AudioManager.remove(Game.audio.playerBg), a.AudioManager.add(Game.audio.zombieMode, {
                    loop: !0
                })
            },
            step: function(a) {
                return "left" === this.p.direction && (this.p.flip = "x"), "right" === this.p.direction && (this.p.flip = !1), this.p.y > Game.map.p.h && this.trigger("player.outOfMap"), this.p.x > Game.map.p.w && (this.p.x = Game.map.p.w), this.p.x < 0 && (this.p.x = 0), this.p.timeToNextSave > 0 && (this.p.timeToNextSave = Math.max(this.p.timeToNextSave - a, 0)), 0 === this.p.timeToNextSave && (this.savePosition(), this.p.timeToNextSave = 4), 0 !== this.p.vy ? this.play("jump") : 0 !== this.p.vx ? this.play("run") : this.play("stand")
            },
            savePosition: function() {
                var b, c;
                return b = this.p.vx / Math.abs(this.p.vx), c = a.stage().locate(this.p.x, this.p.y + this.p.h / 2 + 1, Game.SPRITE_TILES), c ? (this.p.savedPosition.x = this.p.x, this.p.savedPosition.y = this.p.y) : void 0
            },
            die: function() {
                var b;
                return a.state.set("lives", 3), Game.player = b = this.stage.insert(new a.Player({
                    x: this.p.savedPosition.x,
                    y: this.p.savedPosition.y
                })), b.p.wasZombie = !0, Game.setCameraTo(this.stage, b), Game.infoLabel.zombieModeOff(), Game.playerAvatar.changeToPlayer(), a.AudioManager.remove(Game.audio.zombieMode), this.destroy()
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.BulletsCounter = a.UI.Text.extend("UI.BulletsCounter", {
            init: function(b) {
                return this._super(b, {
                    x: 0,
                    y: 0,
                    label: a.state.get("bullets") + "",
                    size: 19,
                    color: "#fff",
                    family: "ROBOTO"
                }), this.p.x = -this.p.img.w / 2 - this.p.w / 2 - 12, a.state.on("change.bullets", this, "updateLabel")
            },
            updateLabel: function(a) {
      
//  WHAT IS DISPLAYED THE FIRST TIME YOU SHOOT THE GUN    
      
                return this.p.label = a + ""
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.BulletsImg = a.Sprite.extend("Q.UI.BulletsImg", {
            init: function(a) {
                return this._super(a, {
  
  
  
// CHANGE SIZE OF BULLET STATUS BOX
  
                    x: 0,
                    y: 0,
                    sheet: "hud_bullets"
                })
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.EnemiesAvatar = a.Sprite.extend("Q.UI.EnemiesAvatar", {
            init: function(b) {
                return this._super(b, {
                    x: 0,
                    y: 0,
                    sheet: "hud_zombie"
                }), this.p.x = a.width - this.p.w / 2, this.p.y = this.p.h / 2 + 8
            }
        })
    }.call(this),
    function() {
        var a;


// ENEMY COUNTER

        a = Game.Q, a.UI.EnemiesCounter = a.UI.Text.extend("UI.EnemiesCounter", {
            init: function(b) {
                return this._super(b, {
                    x: -2,
                    y: 0,
                    label: a.state.get("enemiesCounter") + "",
                    size: 11,
                    color: "#fff",
                    family: "Roboto"
                }), this.p.w = 60, a.state.on("change.enemiesCounter", this, "updateLabel")
            },
            updateLabel: function(a) {
                return this.p.label = a + ""
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.HealthCounter = a.UI.Text.extend("UI.HealthCounter", {
            init: function(b) {
                return this._super(b, {
                    x: 0,
                    y: 0,
                    label: a.state.get("lives") + "",
                    size: 34,
                    color: "#ec655d",
                    family: "Roboto"
                }), this.p.x = -this.p.img.w / 2 - this.p.w / 2 - 6, a.state.on("change.lives", this, "updateLabel")
            },
            updateLabel: function(a) {
                return this.p.label = a + ""
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.HealthImg = a.Sprite.extend("Q.UI.HealthImg", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    sheet: "hud_health"
                })
            },
            changeToHalf: function() {
                return this.p.sheet = "hud_health_half"
            }
        })
    }.call(this),
  
  
// TEXTBUBBLE TOP LEFT CORNER is like InfoLabel
  
  
    function() {
        var a;
        a = Game.Q, a.UI.InfoLabel = a.UI.Text.extend("UI.InfoLabel", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    label: "",
                    color: "#222221",
                    size: 24,
                    family: "Roboto"
                })
            },
            afterLabelChange: function() {
                return this.calcSize(), this.p.container.p.x = this.p.offsetLeft + this.p.w / 2 + 10, this.p.container.fit(5, 10), a._generatePoints(this)
            },



// DEFINE TEXT FOR SPEECH BUBBLE

            intro: function() {
                return this.p.label = "I need to find my way out of here", this.afterLabelChange()
            },
            keyNeeded: function() {
                return this.p.label = "I need a key for this", this.afterLabelChange()
            },
            doorOpen: function() {
                return this.p.label = "go inside", this.afterLabelChange()
            },
            gunFound: function() {
                return this.p.label = "Found a gun", this.afterLabelChange()
            },
            outOfBullets: function() {
                return this.p.label = "no more ammo", this.afterLabelChange()
            },
            ammoFound: function() {
                return this.p.label = "More ammo, more stunned zombies!", this.afterLabelChange()
            },
            keyFound: function() {
                return this.p.label = "get to the portal", this.afterLabelChange()
            },
            clear: function() {
                return this.p.label = "", this.afterLabelChange()
            },
            lifeLevelLow: function() {
                return this.p.label = "this hurts", this.afterLabelChange()
            },
            extraLifeFound: function() {
                return this.p.label = "Feelin' good!", this.afterLabelChange()
            },
            lifeLost: function() {
                return this.p.label = "Ooow!", this.afterLabelChange()
            },
            zombieModeOn: function() {
                return this.p.label = "I was poisoned. I'm Dying. Nooo!", this.afterLabelChange()
            },
            zombieModeOnNext: function() {
                return this.p.label = "Suicide is the only option", this.afterLabelChange()
            },
            zombieModeOff: function() {
                return this.p.label = "Watch this, punk!", this.afterLabelChange()
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.InventoryKey = a.Sprite.extend("Q.UI.InventoryKey", {
            init: function(b) {
                return this._super(b, {
                    x: 0,
                    y: 0,
                    sheet: "hud_key_empty"
                }), a.state.on("change.hasKey", this, "updateSheet")
            },
            updateSheet: function(a) {
                return this.p.sheet = a === !0 ? "hud_key_collected" : "hud_key_empty"
            }
        })
    }.call(this),
    function() {
        var a;




// DOES GRADIENT ALLOW ME TO DRAW SHAPES WITH GRADIENTS ? HOW ?

        a = Game.Q, a.UI.LinearGradient = a.Sprite.extend("Q.UI.LinearGradient", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    z: 0,
                    asset: Game.assets.gradient
                })
            },
            draw: function(b) {
                var c, d;
                return c = this.asset(), d = b.createPattern(c, "repeat"), b.fillStyle = d, b.fillRect(0, 0, a.width, this.p.h)
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.PlayerAvatar = a.Sprite.extend("Q.UI.PlayerAvatar", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    sheet: "hud_player"
                }), this.p.x = this.p.w / 2, this.p.y = this.p.h / 2
            },



// THIS DOES SOMETHING ON ZOMBIE HUMAN CHANGE

            changeToZombie: function() {
                return this.p.sheet = "hud_zombie_player"
            },
            changeToPlayer: function() {
                return this.p.sheet = "hud_player"
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.RadialGradient = a.Sprite.extend("Q.UI.RadialGradient", {
            init: function(b) {
                return this._super(b, {
                    x: a.width / 2,
                    y: a.height / 2,
                    w: a.width,
                    h: a.height
                }), console.log(this.p)
            },
            draw: function(a) {
                var b;
                return b = a.createRadialGradient(0, 0, this.p.w / 3, 0, 0, this.p.w / 2 + this.p.w / 4), b.addColorStop(0, "rgba(0,0,0,0)"), b.addColorStop(1, "rgba(0,0,0,1)"), a.fillStyle = b, a.fillRect(-this.p.cx, -this.p.cy, this.p.w, this.p.h), a.fill()
            }
        })
    }.call(this),


// BULLET ANIMATION

    function() {
        var a;
        a = Game.Q, a.animations("bullet", {
            fly: {
                frames: [0, 1, 2, 3, 4, 5],
                rate: .3
            }


//  BULLET SPEED AND BULLET GRAVITY


        }), a.Sprite.extend("Bullet", {
            init: function(b) {
                return this._super(b, {
                    range: a.width / 2,
                    sheet: "bullet",
                    sprite: "bullet",
                    speed: 624,
                    gravity: 0.0251,
                    type: Game.SPRITE_BULLET,
                    collisionMask: Game.SPRITE_TILES | Game.SPRITE_ENEMY
                }), this.add("2d, animation"), this.play("fly"), this.p.initialX = this.p.x, this.p.initialY = this.p.y, this.on("hit", this, "collision")
            },
            step: function() {
                return "left" === this.p.direction ? (this.p.vx = -this.p.speed, this.p.flip = "x") : (this.p.vx = this.p.speed, this.p.flip = !1), (this.p.x > Game.map.width || this.p.x < 0) && this.die(), this.p.x > this.p.initialX + this.p.range || this.p.x < this.p.initialX - this.p.range ? this.die() : void 0
            },
            collision: function(a) {
                return this.p.x -= a.separate[0], this.p.y -= a.separate[1], a.obj.isA("Zombie") ? this.destroy() : this.die()
            },
            die: function() {
                return Game.currentLevelData.bullets.waisted += 1, this.destroy()
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.Sprite.extend("Door", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    z: 10,
                    sheet: "door_closed",
                    opened: !1,
                    type: Game.SPRITE_PLAYER_COLLECTIBLE,
                    sensor: !0
                }), this.p.y -= this.p.h / 2 - Game.assets.map.tileSize / 2, this.on("sensor", this, "sensor")
            },
            sensor: function(b) {
                if (b.isA("Player")) {
                    if (a.state.get("hasKey") && !this.p.opened) return a.state.set("hasKey", !1), this.p.opened = !0, this.p.sheet = "door_open", Game.infoLabel.doorOpen();
                    if (!this.p.opened) return Game.infoLabel.keyNeeded();
                    
                    
// WHAT HAPPENS WHEN YOU GET TO THE DOOR AND HOW MANY ZOMBIES YOU NEED TO KILL TO PROCEED                    
                    if (this.p.opened && (a.inputs.up || a.inputs.action)) return b.destroy(), Game.currentLevelData.zombies.healed = null != this.stage.lists.Human ? this.stage.lists.Human.length : 0, Game.stageEndLevelScreen()
                }
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.Sprite.extend("ExitSign", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    z: 10,
                    sheet: "exit_sign",
                    type: Game.SPRITE_NONE
                }), this.p.y -= this.p.h / 2 - Game.assets.map.tileSize / 2
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.Sprite.extend("Gun", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    z: 10,
                    sheet: "gun",
                    type: Game.SPRITE_PLAYER_COLLECTIBLE,
                    sensor: !0,
                    noOfBullets: 0,
      
      
// BULLET COUNT ADDED WHEN PICKING UP WEAPON    
      
                    bullets: 6
                }), this.p.y -= 15, this.p.bullets = parseInt(this.p.bullets, 10), this.on("sensor", this, "sensor")
            },
            sensor: function(b) {
                return b.isA("Player") ? (b.has("gun") ? (b.p.noOfBullets += this.p.bullets, a.state.inc("bullets", this.p.bullets), Game.currentLevelData.bullets.available += this.p.bullets, Game.infoLabel.ammoFound()) : (a.state.set("hasGun", !0), b.add("gun"), Game.infoLabel.gunFound(), b.p.noOfBullets = this.p.bullets, a.state.set("bullets", this.p.bullets), Game.currentLevelData.bullets.available = this.p.bullets), a.AudioManager.add(Game.audio.collected), this.destroy()) : void 0
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.Sprite.extend("Health", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    z: 10,
                    sheet: "health",
                    type: Game.SPRITE_PLAYER_COLLECTIBLE,
                    sensor: !0
                }), this.p.y -= 15, this.on("sensor", this, "sensor")
            },
            sensor: function(b) {
                return b.isA("Player") ? (b.updateLifePoints(1), Game.infoLabel.extraLifeFound(), a.AudioManager.add(Game.audio.collected), this.destroy(), Game.currentLevelData.health.collected += 1) : void 0
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.Sprite.extend("Key", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    z: 10,
                    sheet: "key",
                    type: Game.SPRITE_PLAYER_COLLECTIBLE,
                    sensor: !0
                }), this.p.y -= 15, this.on("sensor", this, "sensor")
            },



// PLAYER FINDS KEY

            sensor: function(b) {
                return b.isA("Player") ? (a.state.set("hasKey", !0), Game.infoLabel.keyFound(), a.AudioManager.add(Game.audio.collected), this.destroy()) : void 0
            }
        })
    }.call(this),
    function() {
        var a;



// AUDIO MUTE BUTTON

        a = Game.Q, a.UI.AudioButton = a.UI.Button.extend("UI.AudioButton", {
            init: function(b) {
                var c = this;
                return this._super(b, null, {
                    x: 0,
                    y: 0,
                    type: a.SPRITE_UI | a.SPRITE_DEFAULT,
                    sheet: "hud_audio_on_button",
                    keyActionName: "mute"
                }), this.p.sheet = Game.isMuted ? "hud_audio_off_button" : "hud_audio_on_button", this.on("click", function() {
                    return Game.isMuted ? (a.AudioManager.unmute(), c.p.sheet = "hud_audio_on_button", Game.isMuted = !1, Game.trackEvent("Audio Button", "clicked", "on")) : (a.AudioManager.mute(), c.p.sheet = "hud_audio_off_button", Game.isMuted = !0, Game.trackEvent("Audio Button", "clicked", "off"))
                })
            }
        })
    }.call(this),
    function() {
        var a;



// COPYRIGHT FOOTER

        a = Game.Q, a.UI.Authors = a.UI.Text.extend("UI.Authors", {
            init: function(b) {
                return this._super(b, {
                    label: "EFF BEE EYE - 2017",
                    color: "#ffffff",
                    family: "Roboto",
                    size: 10
                }), this.p.x = a.width / 2, this.p.y = a.height - this.p.h / 2
            }
        })
    }.call(this),



// DRAW LEVEL BUTTON ON LEVEL SELECT SCREEN

    function() {
        var a;
        a = Game.Q, a.UI.LevelButton = a.UI.Button.extend("UI.LevelButton", {
            init: function(b) {
                var c = this;
                return this._super(b, null, {
                    type: a.SPRITE_UI | a.SPRITE_DEFAULT,
                    sheet: "ui_level_button",
  
  
  
  // LEVEL SELECT BUTTON COLOR AND SIZE
  
                    fontColor: "#ff700e",
                    font: "400 70px Roboto"
                }), this.p.label = this.p.level, this.p.sheetW = 172, this.p.sheetH = 130, this.p.cx = this.p.sheetW / 2, this.p.cy = this.p.sheetH / 2, this.p.enabled === !1 && (this.p.sheet = "ui_level_button_locked", this.p.label = !1), this.on("click", function() {
                    return c.p.enabled ? c.p.level > 1 ? Game.stageLevel(c.p.level) : Game.stageControlsScreen() : Game.trackEvent("Level Button", "clicked", "locked")
                })
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.LevelScoreImg = a.Sprite.extend("Q.UI.LevelScoreImg", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    sheet: "ui_level_score"
                }), this.p.empty ? this.p.sheet = "ui_level_score_empty" : void 0
            }
        })
    }.call(this),
    function() {
        var a;
        a = Game.Q, a.UI.LevelScoreImgSmall = a.Sprite.extend("Q.UI.LevelScoreImgSmall", {
            init: function(a) {
                return this._super(a, {
                    x: 0,
                    y: 0,
                    sheet: "ui_level_score_small"
                })
            }
        })
    }.call(this),
    function() {
        var a;



// BACK BUTTON (BACK TO LEVEL SELECT SCREEN)


        a = Game.Q, a.UI.MenuButton = a.UI.Button.extend("UI.MenuButton", {
            init: function(b) {
                return this._super(b, null, {
                    x: a.width - 30,
                    y: 170,
                    z: 100,
                    type: a.SPRITE_UI | a.SPRITE_DEFAULT,
                    sheet: "hud_back_button",
                    keyActionName: "escape"
                }), this.on("click", function() {
                    return Game.stageLevelSelectScreen(), Game.trackEvent("Menu Button", "clicked")
                })
            }
        })
    }.call(this),
    function() {
        var a;





// PAUSE BUTTON AND PAUSE BUTTON OVERLAY TEXT

        a = Game.Q, a.UI.PauseButton = a.UI.Button.extend("UI.PauseButton", {
            init: function(b) {
                var c = this;
                return this._super(b, null, {
                    x: a.width - 30,
                    y: 110,
                    z: 100,
                    type: a.SPRITE_UI | a.SPRITE_DEFAULT,
                    sheet: "hud_pause_button",
                    keyActionName: "pause"
                }), this.pausedScreen = new a.UI.Container({
                    x: a.width / 2,
                    y: a.height / 2,
                    w: a.width,
                    h: a.height,
                    z: 50,
                    fill: "rgba(0,0,0,0.5)"
                }), this.pausedText = new a.UI.Text({
                    x: 0,
                    y: 0,
                    label: "Paused",
                    color: "#fff",
                    family: "Roboto",
                    size: 220
                }), this.on("click", function() {
                    return Game.isPaused ? (c.unpause(), Game.isPausedByClick = !1, Game.trackEvent("Pause Button", "clicked", "off")) : (c.pause(), Game.isPausedByClick = !0, Game.trackEvent("Pause Button", "clicked", "on"))
                })
            },
            pause: function() {
                return Game.pauseGame(), this.stage.insert(this.pausedScreen), this.pausedScreen.insert(this.pausedText)
            },
            unpause: function() {
                return Game.unpauseGame(), this.stage.remove(this.pausedScreen)
            }
        })
    }.call(this);
    
//    var Q = Quintus().include("Input");
//    Q.input.joypadControls();
