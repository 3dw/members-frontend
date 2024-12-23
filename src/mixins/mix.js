export default {
    methods: {
        toList(obj) {
            if (!obj || typeof obj !== 'object') {
                return [];
            }
            else {
                return Object.values(obj);
            }
        },
        part(str) {
            return String(str).substring(0, 100);
        },
        toAge(y) {
            const currentYear = (new Date()).getFullYear();
            return currentYear - parseInt(y);
        },
        highlight(text, search) {
            if (!text) {
                return '';
            }
            text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            text = text.replace(/&lt;\s*br\/?\s*&gt;/g, '<br/>');
            if (!search) {
                return text;
            }
            if (search.startsWith('$')) {
                return text;
            }
            const keys = search.split(/\s+/g);
            for (const k of keys) {
                text = text.replace(new RegExp(k, 'gi'), '<span class="highlightedText">$&</span>');
            }
            return text;
        },
        getIcon(h) {
            // console.log('a')
            // console.log(h)
            // console.log("getIcon called with:", h);
            if (h && h.photoURL) {
                // console.log("Returning photoURL:", h.photoURL);
                return h.photoURL;
            }
            else if (h && h.name) {
                // console.log('b')
                // console.log("Returning name-based URL for:", h.name);
                return `https://www.moedict.tw/${h.name}.png`;
            }
            else {
                // console.log("Returning unknown user icon");
                return 'https://www.moedict.tw/unknown.png';
            }
        },
        countDateDiff(num) {
            if (!num) {
                return '';
            }
            const date = new Date(num);
            return date.toLocaleDateString();
        },
        makeHref(str) {
            if (!str) {
                return '';
            }
            let href = String(str);
            if (!href.startsWith('http://') && !href.startsWith('https://')) {
                href = 'http://' + href;
            }
            return href.replace('https://', '');
        },
        badAge(y) {
            if (!y) {
                return false;
            }
            const currentYear = (new Date()).getFullYear();
            const age = currentYear - parseInt(y);
            return isNaN(age);
        },
        isValid(root) {
            return root &&
                root.name && root.share &&
                root.learner_habit && root.note &&
                root.address &&
                !(root.latlngColumn === 'undefined,undefined') &&
                !(root.latlngColumn === '36.778261,-119.4179324') &&
                root.connect_me;
        },
        asValid(root) {
            return root && root.name && root.note && root.note.length >= 20 && root.address && !(root.latlngColumn === 'undefined,undefined') && !(root.latlngColumn === '36.778261,-119.4179324');
        },
        searchBy(obj, key) {
            const ks = Object.keys(obj);
            const list = ks.map(k => obj[k]);
            if (!list) {
                return [];
            }
            if (!key) {
                key = '';
            }
            const keys = key.split(/[\s&]+/g);
            let ans = list;
            for (const k of keys) {
                let min, max;
                [min, max] = k.split(/[~-]/);
                if (k.match(/(\d+)[~-](\d+)/)) {
                    ans = ans.filter(o => (this.toAge(o.learner_birth) <= Number(max) && this.toAge(o.learner_birth)) >= min ||
                        (this.toAge(o.child_birth) <= Number(max) && this.toAge(o.child_birth) >= min) ||
                        (this.toAge(o.child_birth2) <= Number(max) && this.toAge(o.child_birth2) >= min));
                }
                else if (k.match(/(\d+)\+/)) {
                    min = k.split('+')[0];
                    ans = ans.filter(o => this.toAge(o.learner_birth) >= Number(min) ||
                        this.toAge(o.child_birth) >= Number(min) ||
                        this.toAge(o.child_birth2) >= Number(min));
                }
                else if (k.match(/(\d+)-/)) {
                    max = k.split('-')[0];
                    ans = ans.filter(o => this.toAge(o.learner_birth) <= Number(max) ||
                        this.toAge(o.child_birth) <= Number(max) ||
                        this.toAge(o.child_birth2) <= Number(max));
                }
                else {
                    ans = ans.filter(o => {
                        if (o.name) {
                            return (o.name + o.address + o.note + o.freetime + o.learner_habit + o.share + o.ask + o.id).includes(k);
                        }
                        else {
                            return false;
                        }
                    });
                }
            }
            ans.sort((a, b) => {
                if (!a.lastUpdate) {
                    a.lastUpdate = 0;
                }
                if (!b.lastUpdate) {
                    b.lastUpdate = 0;
                }
                return b.lastUpdate - a.lastUpdate;
            });
            return ans;
        }
    }
};
//# sourceMappingURL=mix.js.map