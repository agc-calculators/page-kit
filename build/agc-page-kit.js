(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'styled-components'], factory) :
  (global = global || self, factory(global.PageKit = {}, global.styled));
}(this, function (exports, styled) { 'use strict';

  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\npadding: 4px 8px;\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\nbackground-color: #ffffff;\nborder-radius: 4px;\nbox-shadow: 0 1px 1px rgba(9,45,66,.25), 0 0 0 1px rgba(9,45,66,.08);\ndisplay: flex;\nmargin-bottom: 16px;\nposition: relative;\nwidth: 100%;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledCard = styled.div(_templateObject());
  var StyledCardContent = styled.div(_templateObject2());

  var cards = /*#__PURE__*/Object.freeze({
    StyledCard: StyledCard,
    StyledCardContent: StyledCardContent
  });

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\nposition: -webkit-sticky;\nposition: sticky;\ntop: var(--sticky-div-top, 0px);\n"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: row;\nalign-items: flex-start;\njustify-content: center;\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledStickyContainer = styled.div(_templateObject$1());
  var StyleStickyDiv = styled.div(_templateObject2$1());

  var containers = /*#__PURE__*/Object.freeze({
    StyledStickyContainer: StyledStickyContainer,
    StyleStickyDiv: StyleStickyDiv
  });

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\np.error, p.description {\nfont-size: 14px;\npadding: 4px 0;\nmargin: 0;\n}\np.error {\ncolor: #eb5a46;\n}\np.description {\ncolor: var(--form-description-color, #6b808c);\n}\nlabel, legend {\nfont-weight: 700;\ncolor: var(--form-text-color, #17394d);\nfont-size: 14px;\nline-height: 16px;\nmargin-top: 16px;\nmargin-bottom: 8px;\ndisplay: block;\n}\ninput:not([type=file]),\nselect,\ntextarea {\nbackground-color: #fafcfc;\nborder: none;\nbox-shadow: inset 0 0 0 2px #dfe3e6;\ncolor: #17394d;\nbox-sizing: border-box;\n-webkit-appearance: none;\nborder-radius: 3px;\ndisplay: block;\nline-height: 20px;\npadding: 8px 12px;\ntransition-property: background-color,border-color,box-shadow;\ntransition-duration: 85ms;\ntransition-timing-function: ease;\nwidth: 100%;\nmargin: 4px 0 12px;\n}\ninput[type=submit], button {\nwidth: auto;\nbackground-color: #ebeef0;\ncolor: #a6b3ba;\nbox-shadow: 0 1px 0 0 rgba(9,45,66,.13);\nborder: none;\ncursor: pointer;\ndisplay: inline-block;\nfont-weight: 700;\nline-height: 20px;\nmargin: 8px 4px 0 0;\npadding: 6px 24px;\ntext-align: center;\n&.primary {\nbackground-color: #5aac44;\nbox-shadow: 0 1px 0 0 #3f6f21;\nborder: none;\ncolor: #fff;\n}\n}\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledForm = styled.form(_templateObject$2());

  var forms = /*#__PURE__*/Object.freeze({
    StyledForm: StyledForm
  });

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\ndisplay: inline-block;\nvertical-align: top;\n\n> a {\nborder-radius: 3px;\ncolor: var(--list-item-color, #6b808c);\ndisplay: block;\nmargin: 0 1px 1px;\npadding: 6px 8px;\ntransition: .1s ease;\ntext-decoration: underline;\nbackground-color: transparent;\n}\n\n&:hover > a {\nbackground-color: var(--list-item-hover-background, #edeff0);\ncolor: var(--list-item-hover-color, #092d42);\n}\n\n&.active > a,\n&.active > a:hover {\nbackground-color: var(--list-item-active-background, #e4f0f6);\ncolor: var(--list-item-active-color: #026aa7);\n}    \n"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\ntext-align: center;\n"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\nmargin: 0;\nalign-items: baseline;\ndisplay: flex;\nheight: 32px;\npadding: 0 0 0 8px;\n\n> :first-child {\ndisplay: block;\ncolor: var(--list-header-color, #6b808c);\nfont-size: 12px;\nfont-weight: 500;\nletter-spacing: 0.4em;\nline-height: 16px;\nmargin-top: 16px;\ntext-transform: uppercase;\nflex: 1 1 auto;\nmargin: 0;\npadding: 8px 0;\n}\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\nflex: 1 1 auto;    \n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\ndisplay: block;\nflex: 0 0 auto;\ntext-align: center;\nwidth: var(--list-item-icon-width, 32px);\ncolor: #798d99\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral(["\nmargin-bottom: var(--list-item-spacing, 4px);\n> a {\nalign-items: center;\nbackground-color: transparent;\nborder-radius: 4px;\nbox-shadow: none;\ncolor: var(--list-item-color, #17394d);\ndisplay: flex;\nfont-weight: 700;\nmargin: 0;\nmin-height: 20px;\noverflow: hidden;\npadding: 6px 8px 6px 0;\ntext-decoration: none;\ntransition-property: background-color, border-color, box-shadow;\ntransition-duration: 85ms;\ntransition-timing-function: ease;\n}    \n> a:hover {\ncolor: var(--list-item-hover-color, #092d42);\nbackground-color: var(--list-item-hover-background, rgba(9,45,66,.13));\n}\n&.active > a,\n&.active > a:hover {\nbackground-color: var(--list-item-active-background, #e4f0f6);\ncolor: var(--list-item-active-color: #026aa7);\n}\n"]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$3() {
    var data = _taggedTemplateLiteral(["\nlist-style: none;\nmargin: 0;\npadding: 0;    \n"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledList = styled.ul(_templateObject$3());
  var StyledListItem = styled.li(_templateObject2$2());
  var StyledListItemIcon = styled.span(_templateObject3());
  var StyledListItemText = styled.span(_templateObject4());
  var StyledListHeader = styled.div(_templateObject5());
  var InlineStyledList = styled(StyledList)(_templateObject6());
  var InlineStyledListItem = styled.li(_templateObject7());

  var lists = /*#__PURE__*/Object.freeze({
    StyledList: StyledList,
    StyledListItem: StyledListItem,
    StyledListItemIcon: StyledListItemIcon,
    StyledListItemText: StyledListItemText,
    StyledListHeader: StyledListHeader,
    InlineStyledList: InlineStyledList,
    InlineStyledListItem: InlineStyledListItem
  });

  function _templateObject$4() {
    var data = _taggedTemplateLiteral(["\nvertical-align: top;\nborder-top: 1px solid #c2ccd1;\nborder-left: 1px solid #c2ccd1;\nmargin-bottom: 8px;\nwidth: 100%;\nborder-collapse: collapse;\nborder-spacing: 0;\n\ntd, th {\npadding: 6px;\nvertical-align: top;\nborder: 1px solid #c2ccd1;\n}\n\nthead {\nbackground: var(--thead-background-color, #ebeef0);\n}\n\nth {\nfont-weight: 700;\n}\n\ntbody {\nbackground-color: var(--tbody-background-color, #fff);\n}\n"]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledTable = styled.table(_templateObject$4());

  var tables = /*#__PURE__*/Object.freeze({
    StyledTable: StyledTable
  });

  exports.Cards = cards;
  exports.Containers = containers;
  exports.Forms = forms;
  exports.Lists = lists;
  exports.Tables = tables;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
