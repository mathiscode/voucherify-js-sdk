import { createElement, useState, useEffect, useCallback, Fragment } from 'react';
import { VoucherifyClientSide } from '@voucherify/sdk';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function VoucherifyLogo(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return createElement("figure", {
    className: "voucherifyLogo"
  }, src ? createElement("img", {
    className: "voucherifyLogo",
    src: src,
    alt: alt
  }) : createElement("svg", {
    className: "voucherifyLogo",
    viewBox: "0 0 46 45"
  }, createElement("path", {
    fill: "currentColor",
    "fill-rule": "nonzero",
    d: "M18.494 3.174c2.112 2.131 3.145 4.69 3.145 7.72 0 3.032-1.033 5.59-3.145 7.722-2.112 2.131-4.647 3.173-7.651 3.173-3.004 0-5.539-1.042-7.651-3.173C1.032 16.532 0 13.926 0 10.942s1.033-5.637 3.145-7.768C5.257 1.042 7.839 0 10.843 0c2.957 0 5.539 1.042 7.65 3.174zm-7.651 1.231c-1.784 0-3.286.616-4.553 1.895-1.268 1.279-1.878 2.795-1.878 4.595 0 1.8.61 3.316 1.878 4.594 1.267 1.28 2.77 1.895 4.553 1.895 1.784 0 3.286-.616 4.553-1.895 1.267-1.278 1.877-2.794 1.877-4.594 0-1.8-.61-3.316-1.877-4.595-1.267-1.232-2.77-1.895-4.553-1.895zM34.782 44.574c-3.051-.19-5.54-1.232-7.51-3.221-2.066-2.085-3.145-5.21-3.145-8.195v-.569c0-.852.234-1.468.657-1.942.422-.426.938-.663 1.549-.663.61 0 1.126.237 1.549.663.422.427.657 1.042.657 1.895v.947c.094 1.611.704 3.553 1.877 4.69 1.268 1.279 2.77 1.895 4.553 1.895h.094c1.784 0 3.286-.616 4.553-1.895 1.174-1.137 1.784-3.079 1.878-4.69v-.947c0-.805.235-1.42.657-1.895.422-.426.939-.663 1.549-.663s1.127.237 1.549.663c.422.427.657 1.09.657 1.942v.569c-.047 2.984-1.08 6.063-3.145 8.195-1.971 1.99-4.459 3.079-7.51 3.22h-.47zM6.102 42.916c-.563 0-1.126-.237-1.596-.663-.892-.9-.892-2.321 0-3.174L40.367 2.937c.892-.9 2.3-.9 3.145 0 .892.9.892 2.32 0 3.174L7.698 42.253a2.307 2.307 0 01-1.596.663z"
  })));
}

function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

function clsx () {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
}

var capitalizeString = function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var splitLongKey = function splitLongKey(key) {
  return key.split('_').map(function (k) {
    return capitalizeString(k);
  }).join('');
};
var removeEmptyAttributes = function removeEmptyAttributes(obj) {
  Object.keys(obj).forEach(function (k) {
    return obj[k] && typeof obj[k] === 'object' && removeEmptyAttributes(obj[k]) || !obj[k] && (obj[k] !== undefined || obj[k] === '') && delete obj[k];
  });
  return obj;
};
var validatePhoneNumber = function validatePhoneNumber(phoneNumber) {
  var re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  return re.test(phoneNumber);
};
var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(email.toLowerCase());
};

function useVoucherifyClient(options) {
  var _useState = useState(function () {
    return VoucherifyClientSide(options);
  }),
      client = _useState[0],
      setClient = _useState[1];

  var _useState2 = useState(false),
      isSubmitting = _useState2[0],
      setSubmitting = _useState2[1];

  useEffect(function () {
    setClient(VoucherifyClientSide(options));
  }, [options.apiUrl, options.clientApplicationId, options.clientSecretKey, options.trackingId, options.origin]);
  return [client, isSubmitting, setSubmitting];
}

function getEmptyInputs() {
  return {
    voucherifyCode: '',
    voucherifyAmount: '',
    voucherifyDiscountType: '',
    voucherifyPercentOff: 0,
    voucherifyAmountOff: 0,
    voucherifyUnitOff: 0,
    voucherifyTracking: ''
  };
}

function getEmptyInputState() {
  return {
    voucherifyCode: false,
    voucherifyAmount: false,
    voucherifyValidate: false
  };
}

function useVoucherifyValidateInputs() {
  var _useState = useState(getEmptyInputs),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = useState(getEmptyInputState),
      inputState = _useState2[0],
      setInputState = _useState2[1];

  var onInputChange = useCallback(function onChange(event) {
    // event.persist()
    var name = event.target.name;
    setInput(function (prev) {
      var _extends2;

      return _extends({}, prev, (_extends2 = {}, _extends2[name] = event.target.value, _extends2));
    });
  }, []);
  var resetInputs = useCallback(function reset() {
    setInput(getEmptyInputs);
    setInputState(getEmptyInputState);
  }, []);
  return {
    input: input,
    inputState: inputState,
    onInputChange: onInputChange,
    resetInputs: resetInputs,
    setInput: setInput,
    setInputState: setInputState
  };
}

function VoucherifyValidate(_ref) {
  var apiUrl = _ref.apiUrl,
      clientApplicationId = _ref.clientApplicationId,
      clientSecretKey = _ref.clientSecretKey,
      trackingId = _ref.trackingId,
      origin = _ref.origin,
      classInvalid = _ref.classInvalid,
      classInvalidAnimation = _ref.classInvalidAnimation,
      classValid = _ref.classValid,
      classValidAnimation = _ref.classValidAnimation,
      logoSrc = _ref.logoSrc,
      logoAlt = _ref.logoAlt,
      onValidated = _ref.onValidated,
      onError = _ref.onError,
      amount = _ref.amount,
      textPlaceholder = _ref.textPlaceholder,
      amountPlaceholder = _ref.amountPlaceholder,
      _ref$textValidate = _ref.textValidate,
      textValidate = _ref$textValidate === void 0 ? 'Validate' : _ref$textValidate;
  var classNameInvalid = classInvalid || 'voucherifyInvalid';
  var classNameValid = classValid || 'voucherifyValid';
  var classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake';
  var classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada';

  var _React$useState = useState(false),
      allDisabled = _React$useState[0],
      setDisabled = _React$useState[1];

  var _useVoucherifyClient = useVoucherifyClient({
    apiUrl: apiUrl,
    clientApplicationId: clientApplicationId,
    clientSecretKey: clientSecretKey,
    trackingId: trackingId,
    origin: origin
  }),
      client = _useVoucherifyClient[0],
      isSubmitting = _useVoucherifyClient[1],
      setSubmitting = _useVoucherifyClient[2];

  var _useVoucherifyValidat = useVoucherifyValidateInputs(),
      input = _useVoucherifyValidat.input,
      inputState = _useVoucherifyValidat.inputState,
      onInputChange = _useVoucherifyValidat.onInputChange,
      resetInputs = _useVoucherifyValidat.resetInputs,
      setInput = _useVoucherifyValidat.setInput,
      setInputState = _useVoucherifyValidat.setInputState;

  var _React$useState2 = useState(false),
      runValidateOnce = _React$useState2[0],
      setRunValidateOnce = _React$useState2[1];

  useEffect(function () {
    resetInputs();
    setDisabled(false);
  }, [client]);
  var classNames = Object.keys(inputState).map(function (key) {
    var className = key;
    var classes = clsx([className, runValidateOnce ? inputState[key] ? classNameValid + " " + classNameValidAnimation : classNameInvalid + " " + classNameInvalidAnimation : '']);
    return {
      name: key,
      classes: classes
    };
  });
  var onSubmit = useCallback(function onSubmit(_event) {
    setInput(function (prev) {
      return _extends({}, prev, {
        voucherifyDiscountType: '',
        voucherifyAmountOff: 0,
        voucherifyUnitOff: 0,
        voucherifyPercentOff: 0,
        voucherifyTracking: ''
      });
    });
    setInputState(function (prev) {
      return _extends({}, prev, {
        voucherifyValidate: false
      });
    });

    if (!input.voucherifyCode.trim()) {
      setInputState(function (prev) {
        return _extends({}, prev, {
          voucherifyCode: false
        });
      });
      return;
    }

    var payload = {
      code: input.voucherifyCode,
      amount: input.voucherifyAmount.trim() === '' || isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10)) ? 0 : parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10)
    };
    var sanitizedPayload = removeEmptyAttributes(payload);
    setSubmitting(true);
    client.validate(sanitizedPayload).then(function (_response) {
      var response = _response;

      if (!response || !response.valid) {
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifyValidate: false,
            voucherifyAmount: false,
            voucherifyCode: false
          });
        });
        return;
      }

      if (response != null && response.discount) {
        var responseDiscount = response == null ? void 0 : response.discount;

        switch (responseDiscount.type) {
          case 'AMOUNT':
            setInput(function (prev) {
              return _extends({}, prev, {
                voucherifyDiscountType: responseDiscount.type || '',
                voucherifyAmountOff: responseDiscount.amount_off || 0,
                voucherifyUnitOff: 0,
                voucherifyPercentOff: 0,
                voucherifyTracking: (response == null ? void 0 : response.tracking_id) || ''
              });
            });
            break;

          case 'UNIT':
            setInput(function (prev) {
              return _extends({}, prev, {
                voucherifyDiscountType: responseDiscount.type || '',
                voucherifyAmountOff: 0,
                voucherifyUnitOff: responseDiscount.unit_off || 0,
                voucherifyPercentOff: 0,
                voucherifyTracking: (response == null ? void 0 : response.tracking_id) || ''
              });
            });
            break;

          case 'PERCENT':
            setInput(function (prev) {
              return _extends({}, prev, {
                voucherifyDiscountType: responseDiscount.type || '',
                voucherifyAmountOff: 0,
                voucherifyUnitOff: 0,
                voucherifyPercentOff: responseDiscount.percent_off || 0,
                voucherifyTracking: (response == null ? void 0 : response.tracking_id) || ''
              });
            });
            break;
        }
      } else {
        setInput(function (prev) {
          var _response$order;

          return _extends({}, prev, {
            voucherifyDiscountType: 'GIFT_CARD',
            voucherifyAmountOff: (response == null ? void 0 : (_response$order = response.order) == null ? void 0 : _response$order.total_discount_amount) || 0,
            voucherifyUnitOff: 0,
            voucherifyPercentOff: 0,
            voucherifyTracking: (response == null ? void 0 : response.tracking_id) || ''
          });
        });
      }

      setDisabled(true);
      setInputState(function (prev) {
        return _extends({}, prev, {
          voucherifyCode: true,
          voucherifyAmount: true,
          voucherifyValidate: true
        });
      });
      if (typeof onValidated === 'function') onValidated(response);
    })["catch"](function (err) {
      console.error(err);

      if (err.key === 'missing_order') {
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifyValidate: false,
            voucherifyAmount: false,
            voucherifyCode: false
          });
        });
      }

      if (typeof onError === 'function') onError(err);
    })["finally"](function () {
      setSubmitting(false);
      setRunValidateOnce(true);
    });
  }, [input, onError, onValidated, amount]);
  return createElement("div", {
    className: "voucherifyContainer"
  }, createElement(VoucherifyLogo, {
    src: logoSrc,
    alt: logoAlt
  }), createElement("input", {
    type: "text",
    placeholder: textPlaceholder || 'e.g. abc-123',
    name: "voucherifyCode",
    value: input['voucherifyCode'],
    onChange: onInputChange,
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifyCode';
    }).classes,
    disabled: isSubmitting || allDisabled
  }), createElement("input", {
    type: amount ? 'text' : 'hidden',
    placeholder: amountPlaceholder || 'e.g. 52.22',
    name: "voucherifyAmount",
    value: input['voucherifyAmount'],
    onChange: onInputChange,
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifyAmount';
    }).classes,
    disabled: isSubmitting || allDisabled
  }), createElement("input", {
    type: "hidden",
    name: "voucherifyDiscountType",
    value: input['voucherifyDiscountType'],
    className: "voucherifyDiscountType"
  }), createElement("input", {
    type: "hidden",
    name: "voucherifyPercentOff",
    value: input['voucherifyPercentOff'],
    className: "voucherifyPercentOff"
  }), createElement("input", {
    type: "hidden",
    name: "voucherifyAmountOff",
    value: input['voucherifyAmountOff'],
    className: "voucherifyAmountOff"
  }), createElement("input", {
    type: "hidden",
    name: "voucherifyUnitOff",
    value: input['voucherifyUnitOff'],
    className: "voucherifyUnitOff"
  }), createElement("input", {
    type: "hidden",
    name: "voucherifyTracking",
    value: input['voucherifyTracking'],
    className: "voucherifyTracking"
  }), createElement("button", {
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifyValidate';
    }).classes,
    disabled: isSubmitting || allDisabled,
    onClick: onSubmit
  }, createElement("span", {
    className: "voucherifyValidateText"
  }, textValidate)));
}

function getEmptyInputs$1() {
  return {
    name: '',
    email: '',
    phone: '',
    line_1: '',
    line_2: '',
    postal_code: '',
    city: '',
    state: '',
    country: '',
    voucherifyPublishStatus: '',
    voucherifyTracking: '',
    voucherifyPublish: ''
  };
}

function getEmptyInputState$1() {
  return {
    name: true,
    phone: true,
    email: true,
    line_1: true,
    line_2: true,
    postal_code: true,
    city: true,
    state: true,
    country: true,
    voucherifyPublishStatus: true,
    voucherifyPublish: true
  };
}

function useVoucherifyPublishInputs() {
  var _useState = useState(getEmptyInputs$1),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = useState(getEmptyInputState$1),
      inputStates = _useState2[0],
      setInputState = _useState2[1];

  var onInputChange = useCallback(function onChange(event) {
    var name = event.target.name;
    setInput(function (prev) {
      var _extends2;

      return _extends({}, prev, (_extends2 = {}, _extends2[name] = event.target.value, _extends2));
    });
  }, []);
  var resetInputs = useCallback(function reset() {
    setInput(getEmptyInputs$1);
    setInputState(getEmptyInputState$1);
  }, []);
  return {
    input: input,
    inputStates: inputStates,
    onInputChange: onInputChange,
    resetInputs: resetInputs,
    setInput: setInput,
    setInputState: setInputState
  };
}

function VoucherifyPublish(_ref) {
  var apiUrl = _ref.apiUrl,
      clientApplicationId = _ref.clientApplicationId,
      clientSecretKey = _ref.clientSecretKey,
      trackingId = _ref.trackingId,
      origin = _ref.origin,
      classInvalid = _ref.classInvalid,
      classInvalidAnimation = _ref.classInvalidAnimation,
      classValid = _ref.classValid,
      classValidAnimation = _ref.classValidAnimation,
      logoSrc = _ref.logoSrc,
      logoAlt = _ref.logoAlt,
      onPublished = _ref.onPublished,
      onError = _ref.onError,
      campaignName = _ref.campaignName,
      _ref$customerFields = _ref.customerFields,
      customerFields = _ref$customerFields === void 0 ? [] : _ref$customerFields,
      customerNamePlaceholder = _ref.customerNamePlaceholder,
      customerEmailPlaceholder = _ref.customerEmailPlaceholder,
      customerPhonePlaceholder = _ref.customerPhonePlaceholder,
      customerLine1Placeholder = _ref.customerLine1Placeholder,
      customerLine2Placeholder = _ref.customerLine2Placeholder,
      customerPostalCodePlaceholder = _ref.customerPostalCodePlaceholder,
      customerCityPlaceholder = _ref.customerCityPlaceholder,
      customerStatePlaceholder = _ref.customerStatePlaceholder,
      customerCountryPlaceholder = _ref.customerCountryPlaceholder,
      _ref$textPublish = _ref.textPublish,
      textPublish = _ref$textPublish === void 0 ? 'Get voucher' : _ref$textPublish;
  var classNameInvalid = classInvalid || 'voucherifyInvalid';
  var classNameValid = classValid || 'voucherifyValid';
  var classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake';
  var classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada';

  var _React$useState = useState(false),
      allDisabled = _React$useState[0],
      setDisabled = _React$useState[1];

  var _React$useState2 = useState(true),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var _React$useState3 = useState(false),
      runPublishOnce = _React$useState3[0],
      setRunPublishOnce = _React$useState3[1];

  var _useVoucherifyClient = useVoucherifyClient({
    apiUrl: apiUrl,
    clientApplicationId: clientApplicationId,
    clientSecretKey: clientSecretKey,
    trackingId: trackingId,
    origin: origin
  }),
      client = _useVoucherifyClient[0],
      isSubmitting = _useVoucherifyClient[1],
      setSubmitting = _useVoucherifyClient[2];

  var _useVoucherifyPublish = useVoucherifyPublishInputs(),
      input = _useVoucherifyPublish.input,
      inputStates = _useVoucherifyPublish.inputStates,
      onInputChange = _useVoucherifyPublish.onInputChange,
      resetInputs = _useVoucherifyPublish.resetInputs,
      setInput = _useVoucherifyPublish.setInput,
      setInputState = _useVoucherifyPublish.setInputState;

  useEffect(function () {
    resetInputs();
    setDisabled(false);
  }, [client]);
  var classNames = Object.keys(input).map(function (key) {
    var className;

    if (key === 'voucherifyPublishStatus' || key === 'voucherifyTracking' || key === 'voucherifyPublish') {
      className = key;
    } else {
      className = "voucherifyCustomer" + splitLongKey(key);
    }

    var classes = clsx([className, runPublishOnce ? inputStates[key] ? '' : classNameInvalid + " " + classNameInvalidAnimation : '']);
    return {
      name: key,
      classes: classes
    };
  });
  var notDefinedPlaceholders = {
    name: 'e.g. Bruce Wayne',
    email: 'e.g. bruce@wayne.com',
    phone: 'e.g. +48 000 000 000',
    line_1: 'e.g. Wayne Manor',
    line_2: 'e.g. 22B',
    postal_code: 'e.g. 00-0014',
    city: 'e.g. Gotham',
    state: 'e.g. New Jersey',
    country: 'e.g. USA'
  };

  var createInput = function createInput(inputName, inputPlaceholder) {
    if (inputPlaceholder === void 0) {
      inputPlaceholder = '';
    }

    var inputType;

    if (inputName === 'phone') {
      inputType = 'tel';
    } else if (inputName === 'email') {
      inputType = 'email';
    } else {
      inputType = 'text';
    }

    return createElement("input", {
      type: inputType,
      placeholder: inputPlaceholder ? inputPlaceholder : notDefinedPlaceholders["" + inputName],
      name: inputName,
      value: input["" + inputName],
      onChange: onInputChange,
      className: classNames.find(function (cls) {
        return cls.name === inputName;
      }).classes,
      disabled: isSubmitting || allDisabled,
      style: {
        display: visible ? 'block' : 'none'
      }
    });
  };

  var onSubmit = useCallback(function onSubmit(_event) {
    setSubmitting(true);
    setInput(function (prev) {
      return _extends({}, prev, {
        voucherifyPublishStatus: '',
        voucherifyTracking: ''
      });
    });
    setRunPublishOnce(true);
    var payload = {
      customer: {
        name: input.name,
        phone: input.phone.replace(/[\r\n\t\f\s\v]/g, '').trim(),
        email: input.email,
        source_id: input.email,
        address: {
          line_1: input.line_1,
          line_2: input.line_2,
          postal_code: input.postal_code,
          city: input.city,
          state: input.state,
          country: input.country
        }
      }
    };
    var sanitizedPayload = removeEmptyAttributes(payload);
    var inputStatesAfterValidation = customerFields.reduce(function (result, field) {
      if (field.required && input[field.name].trim() === '') {
        result[field.name] = false;
        return result;
      }

      if (field.name === 'phone' && input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
        result['phone'] = validatePhoneNumber(input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim());
        return result;
      }

      if (field.name === 'email' && input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
        result['email'] = validateEmail(input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim());
        return result;
      }

      result[field.name] = true;
      return result;
    }, {
      name: true,
      email: true,
      phone: true,
      line_1: true,
      line_2: true,
      postal_code: true,
      city: true,
      state: true,
      country: true,
      voucherifyPublishStatus: true,
      voucherifyPublish: true
    });
    setInputState(function (prev) {
      return _extends({}, prev, inputStatesAfterValidation);
    });
    var validationFailed = Object.values(inputStatesAfterValidation).some(function (val) {
      return !val;
    });

    if (!validationFailed) {
      client.publish(campaignName, sanitizedPayload).then(function (_response) {
        var response = _response;
        setInput(function (prev) {
          return _extends({}, prev, {
            name: '',
            email: '',
            phone: '',
            line_1: '',
            line_2: '',
            postal_code: '',
            city: '',
            state: '',
            country: '',
            voucherifyTracking: (response == null ? void 0 : response.tracking_id) || '',
            voucherifyPublishStatus: response.voucher.code
          });
        });
        setDisabled(true);
        setVisible(false);
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifyPublishStatus: true
          });
        });
        if (typeof onPublished === 'function') onPublished(response);
      })["catch"](function (err) {
        console.error(err);
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifyPublish: false
          });
        });
        if (typeof onError === 'function') onError(err);
      })["finally"](function () {
        return setSubmitting(false);
      });
    } else {
      setSubmitting(false);
    }
  }, [input, onError, onPublished]);
  return createElement("div", {
    className: "voucherifyContainer wide"
  }, createElement(VoucherifyLogo, {
    src: logoSrc,
    alt: logoAlt
  }), customerFields.some(function (val) {
    return val.name === 'name';
  }) && createInput('name', customerNamePlaceholder), customerFields.some(function (val) {
    return val.name === 'email' || val.name === 'phone';
  }) && createElement("div", {
    className: "voucherifyRow",
    style: {
      display: visible ? 'flex' : 'none'
    }
  }, customerFields.some(function (val) {
    return val.name === 'email';
  }) && createInput('email', customerEmailPlaceholder), customerFields.some(function (val) {
    return val.name === 'phone';
  }) && createInput('phone', customerPhonePlaceholder)), customerFields.some(function (val) {
    return val.name === 'line_1';
  }) && createInput('line_1', customerLine1Placeholder), customerFields.some(function (val) {
    return val.name === 'line_2';
  }) && createInput('line_2', customerLine2Placeholder), customerFields.some(function (val) {
    return val.name === 'postal_code' || val.name === 'city';
  }) && createElement("div", {
    className: "voucherifyRow",
    style: {
      display: visible ? 'flex' : 'none'
    }
  }, customerFields.some(function (val) {
    return val.name === 'postal_code';
  }) && createInput('postal_code', customerPostalCodePlaceholder), customerFields.some(function (val) {
    return val.name === 'city';
  }) && createInput('city', customerCityPlaceholder)), customerFields.some(function (val) {
    return val.name === 'state' || val.name === 'country';
  }) && createElement("div", {
    className: "voucherifyRow",
    style: {
      display: visible ? 'flex' : 'none'
    }
  }, customerFields.some(function (val) {
    return val.name === 'state';
  }) && createInput('state', customerStatePlaceholder), customerFields.some(function (val) {
    return val.name === 'country';
  }) && createInput('country', customerCountryPlaceholder)), createElement("input", {
    type: "hidden",
    name: "voucherifyTracking",
    value: input['voucherifyTracking'],
    className: "voucherifyTracking"
  }), createElement("input", {
    type: "text",
    name: "voucherifyPublishStatus",
    className: "voucherifyPublishStatus " + classNameValid + " " + classNameValidAnimation,
    value: input['voucherifyPublishStatus'],
    style: {
      display: !visible ? 'block' : 'none'
    }
  }), createElement("button", {
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifyPublish';
    }).classes,
    disabled: isSubmitting || allDisabled,
    onClick: onSubmit,
    style: {
      display: visible ? 'block' : 'none'
    }
  }, createElement("span", {
    className: "VoucherifyPublishText"
  }, textPublish)));
}

function getEmptyInputs$2() {
  return {
    voucherifyCode: '',
    voucherifyAmount: '',
    voucherifyTracking: ''
  };
}

function getEmptyInputState$2() {
  return {
    voucherifyCode: false,
    voucherifyAmount: false,
    voucherifyRedeem: false
  };
}

function getEmptyValidInputState() {
  return {
    voucherifyCode: false,
    voucherifyAmount: false,
    voucherifyRedeem: false
  };
}

function useVoucherifyRedeemInputs() {
  var _useState = useState(getEmptyInputs$2),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = useState(getEmptyInputState$2),
      inputStates = _useState2[0],
      setInputState = _useState2[1];

  var _useState3 = useState(getEmptyValidInputState),
      inputValidStates = _useState3[0],
      setValidInputState = _useState3[1];

  var onInputChange = useCallback(function onChange(event) {
    var name = event.target.name;
    setInput(function (prev) {
      var _extends2;

      return _extends({}, prev, (_extends2 = {}, _extends2[name] = event.target.value, _extends2));
    });
  }, []);
  var resetInputs = useCallback(function reset() {
    setInput(getEmptyInputs$2);
    setInputState(getEmptyInputState$2);
  }, []);
  return {
    input: input,
    inputStates: inputStates,
    inputValidStates: inputValidStates,
    setValidInputState: setValidInputState,
    onInputChange: onInputChange,
    resetInputs: resetInputs,
    setInput: setInput,
    setInputState: setInputState
  };
}

function VoucherifyRedeem(_ref) {
  var apiUrl = _ref.apiUrl,
      clientApplicationId = _ref.clientApplicationId,
      clientSecretKey = _ref.clientSecretKey,
      trackingId = _ref.trackingId,
      origin = _ref.origin,
      classInvalid = _ref.classInvalid,
      classInvalidAnimation = _ref.classInvalidAnimation,
      classValid = _ref.classValid,
      classValidAnimation = _ref.classValidAnimation,
      logoSrc = _ref.logoSrc,
      logoAlt = _ref.logoAlt,
      onRedeemed = _ref.onRedeemed,
      onError = _ref.onError,
      amount = _ref.amount,
      textPlaceholder = _ref.textPlaceholder,
      amountPlaceholder = _ref.amountPlaceholder,
      _ref$textRedeem = _ref.textRedeem,
      textRedeem = _ref$textRedeem === void 0 ? 'Redeem' : _ref$textRedeem;
  var classNameInvalid = classInvalid || 'voucherifyInvalid';
  var classNameValid = classValid || 'voucherifyValid';
  var classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake';
  var classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada';

  var _React$useState = useState(false),
      allDisabled = _React$useState[0],
      setDisabled = _React$useState[1];

  var _React$useState2 = useState(false),
      runRedeemOnce = _React$useState2[0],
      setRunRedeemOnce = _React$useState2[1];

  var _useVoucherifyClient = useVoucherifyClient({
    apiUrl: apiUrl,
    clientApplicationId: clientApplicationId,
    clientSecretKey: clientSecretKey,
    trackingId: trackingId,
    origin: origin
  }),
      client = _useVoucherifyClient[0],
      isSubmitting = _useVoucherifyClient[1],
      setSubmitting = _useVoucherifyClient[2];

  var _useVoucherifyRedeemI = useVoucherifyRedeemInputs(),
      input = _useVoucherifyRedeemI.input,
      inputStates = _useVoucherifyRedeemI.inputStates,
      onInputChange = _useVoucherifyRedeemI.onInputChange,
      resetInputs = _useVoucherifyRedeemI.resetInputs,
      setInput = _useVoucherifyRedeemI.setInput,
      setInputState = _useVoucherifyRedeemI.setInputState,
      inputValidStates = _useVoucherifyRedeemI.inputValidStates,
      setValidInputState = _useVoucherifyRedeemI.setValidInputState;

  useEffect(function () {
    resetInputs();
    setDisabled(false);
  }, [client]);
  var classNames = Object.keys(inputStates).map(function (key) {
    var className = key;
    var classes = clsx([className, runRedeemOnce ? inputStates[key] ? classNameInvalid + " " + classNameInvalidAnimation : '' : '', runRedeemOnce ? inputValidStates[key] ? classNameValid + " " + classNameValidAnimation : '' : '']);
    return {
      name: key,
      classes: classes
    };
  });
  var onSubmit = useCallback(function onSubmit(_event) {
    setInput(function (prev) {
      return _extends({}, prev, {
        voucherifyTracking: ''
      });
    });
    setRunRedeemOnce(true);
    var payload = {
      order: {
        amount: input.voucherifyAmount.trim() === '' || isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10)) ? 0 : parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10)
      }
    };
    var sanitizedPayload = removeEmptyAttributes(payload);
    var code = input.voucherifyCode.replace(/[\r\n\t\f\v]/g, '').trim();

    if (!code || input.voucherifyAmount.trim() !== '' && isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10))) {
      return setInputState(function (prev) {
        return _extends({}, prev, {
          voucherifyCode: !code ? true : false,
          voucherifyAmount: amount && isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10)) ? true : false
        });
      });
    }

    setSubmitting(true);
    client.redeem(code, sanitizedPayload).then(function (_response) {
      var response = _response;

      if (!response || response.result !== 'SUCCESS') {
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifyRedeem: true
          });
        });
      }

      setInput(function (prev) {
        return _extends({}, prev, {
          voucherifyTracking: (response == null ? void 0 : response.tracking_id) || ''
        });
      });
      setDisabled(true);
      setValidInputState(function (prev) {
        return _extends({}, prev, {
          voucherifyCode: true,
          voucherifyAmount: true,
          voucherifyRedeem: true
        });
      });
      if (typeof onRedeemed === 'function') onRedeemed(response);
    })["catch"](function (err) {
      console.error(err);
      setInputState(function (prev) {
        return _extends({}, prev, {
          voucherifyRedeem: true,
          voucherifyAmount: true,
          voucherifyCode: true
        });
      });
      if (typeof onError === 'function') onError(err);
    })["finally"](function () {
      return setSubmitting(false);
    });
  }, [input, onError, onRedeemed, amount]);
  return createElement("div", {
    className: "voucherifyContainer"
  }, createElement(VoucherifyLogo, {
    src: logoSrc,
    alt: logoAlt
  }), createElement("input", {
    type: "text",
    placeholder: textPlaceholder || 'e.g. abc-123',
    name: "voucherifyCode",
    value: input['voucherifyCode'],
    onChange: onInputChange,
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifyCode';
    }).classes,
    disabled: isSubmitting || allDisabled
  }), createElement("input", {
    type: amount ? 'text' : 'hidden',
    placeholder: amountPlaceholder || 'e.g. 52.22',
    name: "voucherifyAmount",
    value: input['voucherifyAmount'],
    onChange: onInputChange,
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifyAmount';
    }).classes,
    disabled: isSubmitting || allDisabled
  }), createElement("input", {
    type: "hidden",
    name: "voucherifyTracking",
    value: input['voucherifyTracking'],
    className: "voucherifyTracking"
  }), createElement("button", {
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifyRedeem';
    }).classes,
    disabled: isSubmitting || allDisabled,
    onClick: onSubmit
  }, createElement("span", {
    className: "voucherifyRedeemText"
  }, textRedeem)));
}

function getEmptyInputs$3() {
  return {
    name: '',
    email: '',
    phone: '',
    line_1: '',
    line_2: '',
    postal_code: '',
    city: '',
    state: '',
    country: '',
    voucherifySubscribeStatus: '',
    voucherifySubscribe: ''
  };
}

function getEmptyInputState$3() {
  return {
    name: true,
    phone: true,
    email: true,
    line_1: true,
    line_2: true,
    postal_code: true,
    city: true,
    state: true,
    country: true,
    voucherifySubscribeStatus: true,
    voucherifySubscribe: true
  };
}

function useVoucherifySubscribeInputs() {
  var _useState = useState(getEmptyInputs$3),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = useState(getEmptyInputState$3),
      inputStates = _useState2[0],
      setInputState = _useState2[1];

  var onInputChange = useCallback(function onChange(event) {
    var name = event.target.name;

    if (event.target.value === 'off') {
      setInput(function (prev) {
        var _extends2;

        return _extends({}, prev, (_extends2 = {}, _extends2[name] = 'on', _extends2));
      });
    } else if (event.target.value === 'on') {
      setInput(function (prev) {
        var _extends3;

        return _extends({}, prev, (_extends3 = {}, _extends3[name] = 'off', _extends3));
      });
    } else {
      setInput(function (prev) {
        var _extends4;

        return _extends({}, prev, (_extends4 = {}, _extends4[name] = event.target.value, _extends4));
      });
    }
  }, []);
  var resetInputs = useCallback(function reset() {
    setInput(getEmptyInputs$3);
    setInputState(getEmptyInputState$3);
  }, []);
  return {
    input: input,
    inputStates: inputStates,
    onInputChange: onInputChange,
    resetInputs: resetInputs,
    setInput: setInput,
    setInputState: setInputState
  };
}

var UNCONFIRMED_CUSTOMER = 'Confirm your subscription to our list. Check your email for further instructions.';
var ERROR_MESSAGE = 'We ran into a configuration error. Please try that again. If the error persists, please contact support.';
function VoucherifySubscribe(_ref) {
  var _customerFields$find, _customerFields$find2, _customerFields$find3, _customerFields$find4, _customerFields$find5, _customerFields$find6, _customerFields$find7, _customerFields$find8;

  var apiUrl = _ref.apiUrl,
      clientApplicationId = _ref.clientApplicationId,
      clientSecretKey = _ref.clientSecretKey,
      trackingId = _ref.trackingId,
      origin = _ref.origin,
      classInvalid = _ref.classInvalid,
      classInvalidAnimation = _ref.classInvalidAnimation,
      classValid = _ref.classValid,
      classValidAnimation = _ref.classValidAnimation,
      logoSrc = _ref.logoSrc,
      logoAlt = _ref.logoAlt,
      consents = _ref.consents,
      onSubscribed = _ref.onSubscribed,
      onError = _ref.onError,
      emailPlaceholder = _ref.emailPlaceholder,
      _ref$customerFields = _ref.customerFields,
      customerFields = _ref$customerFields === void 0 ? [] : _ref$customerFields,
      _ref$enableDoubleOptI = _ref.enableDoubleOptIn,
      enableDoubleOptIn = _ref$enableDoubleOptI === void 0 ? false : _ref$enableDoubleOptI,
      _ref$textSubscribe = _ref.textSubscribe,
      textSubscribe = _ref$textSubscribe === void 0 ? 'Subscribe' : _ref$textSubscribe,
      _ref$textSubscribeSuc = _ref.textSubscribeSuccess,
      textSubscribeSuccess = _ref$textSubscribeSuc === void 0 ? 'Thank you for subscribing' : _ref$textSubscribeSuc;
  var classNameInvalid = classInvalid || 'voucherifyInvalid';
  var classNameValid = classValid || 'voucherifyValid';
  var classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake';
  var classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada';

  var _React$useState = useState(false),
      allDisabled = _React$useState[0],
      setDisabled = _React$useState[1];

  var _React$useState2 = useState(true),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var _React$useState3 = useState(false),
      runSubscribeOnce = _React$useState3[0],
      setRunSubscribeOnce = _React$useState3[1];

  var _React$useState4 = useState(false),
      consentsError = _React$useState4[0],
      setConsentsError = _React$useState4[1];

  var _React$useState5 = useState(true),
      loading = _React$useState5[0],
      setLoading = _React$useState5[1];

  var _useVoucherifyClient = useVoucherifyClient({
    apiUrl: apiUrl,
    clientApplicationId: clientApplicationId,
    clientSecretKey: clientSecretKey,
    trackingId: trackingId,
    origin: origin
  }),
      client = _useVoucherifyClient[0],
      isSubmitting = _useVoucherifyClient[1],
      setSubmitting = _useVoucherifyClient[2];

  var _React$useState6 = useState([]),
      loadedConsents = _React$useState6[0],
      setLoadedConsents = _React$useState6[1];

  var widgetFields = [].concat(customerFields, [{
    name: 'email',
    required: true,
    placeholder: emailPlaceholder
  }], consents);

  var _useVoucherifySubscri = useVoucherifySubscribeInputs(),
      input = _useVoucherifySubscri.input,
      inputStates = _useVoucherifySubscri.inputStates,
      onInputChange = _useVoucherifySubscri.onInputChange,
      resetInputs = _useVoucherifySubscri.resetInputs,
      setInput = _useVoucherifySubscri.setInput,
      setInputState = _useVoucherifySubscri.setInputState;

  useEffect(function () {
    resetInputs();
    setDisabled(false);
  }, [client]);
  var onRender = useCallback(function _onRender() {
    if (!enableDoubleOptIn && consents !== [] && consents !== undefined) {
      client.listConsents().then(function (fetchedData) {
        var fetchedConsents = fetchedData.consents.data;
        var filteredConsents = fetchedConsents.filter(function (o1) {
          return consents.some(function (o2) {
            return o1.id === (o2 == null ? void 0 : o2.id);
          });
        });

        if (filteredConsents.length === 0 || filteredConsents.length !== consents.length) {
          setInputState(function (prev) {
            return _extends({}, prev, {
              voucherifySubscribeStatus: true
            });
          });
          setConsentsError(true);
          setVisible(false);
          setInput(function (prev) {
            return _extends({}, prev, {
              voucherifySubscribeStatus: ERROR_MESSAGE
            });
          });
        } else {
          var foundConsents = {};
          var foundConsentsStates = {};
          filteredConsents.forEach(function (consent) {
            foundConsents[consent.id] = '';
            foundConsentsStates[consent.id] = true;
          });
          setInput(function (prev) {
            return _extends({}, prev, foundConsents);
          });
          setInputState(function (prev) {
            return _extends({}, prev, foundConsentsStates);
          });
          setLoadedConsents(filteredConsents);
        }

        setLoading(false);
      })["catch"](function (err) {
        setLoading(false);
        setVisible(false);
        console.error(err);
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifySubscribe: false
          });
        });
        setInput(function (prev) {
          return _extends({}, prev, {
            voucherifySubscribeStatus: ERROR_MESSAGE
          });
        });
        if (typeof onError === 'function') onError(err);
      });
    } else {
      setLoading(false);
    }
  }, [enableDoubleOptIn, consentsError]);
  useEffect(function () {
    onRender();
  }, [onRender]);
  var classNames = Object.keys(input).map(function (key) {
    var className;

    if (key === 'voucherifySubscribeStatus' || key === 'voucherifySubscribe') {
      className = key;
    } else {
      className = "voucherifyCustomer" + splitLongKey(key);
    }

    var classes = clsx([className, runSubscribeOnce ? inputStates[key] ? '' : classNameInvalid + " " + classNameInvalidAnimation : '']);
    return {
      name: key,
      classes: classes
    };
  });
  var notDefinedPlaceholders = {
    name: 'e.g. Bruce Wayne',
    email: 'e.g. bruce@wayne.com',
    phone: 'e.g. +48 000 000 000',
    line_1: 'e.g. Wayne Manor',
    line_2: 'e.g. 22B',
    postal_code: 'e.g. 00-0014',
    city: 'e.g. Gotham',
    state: 'e.g. New Jersey',
    country: 'e.g. USA'
  };

  var createInput = function createInput(inputName, inputPlaceholder) {
    if (inputPlaceholder === void 0) {
      inputPlaceholder = '';
    }

    var inputType;

    if (inputName === 'phone') {
      inputType = 'tel';
    } else if (inputName === 'email') {
      inputType = 'email';
    } else {
      inputType = 'text';
    }

    return createElement("input", {
      type: inputType,
      placeholder: inputPlaceholder ? inputPlaceholder : notDefinedPlaceholders["" + inputName],
      name: inputName,
      value: input["" + inputName],
      onChange: onInputChange,
      className: classNames.find(function (cls) {
        return cls.name === inputName;
      }).classes,
      disabled: isSubmitting || allDisabled,
      style: {
        display: visible ? 'block' : 'none'
      }
    });
  };

  var onSubmit = useCallback(function onSubmit(_event) {
    setSubmitting(true);
    setInput(function (prev) {
      return _extends({}, prev, {
        voucherifySubscribeStatus: ''
      });
    });
    setRunSubscribeOnce(true);
    var payload = {
      source_id: input.email,
      name: input.name,
      phone: input.phone.replace(/[\r\n\t\f\s\v]/g, '').trim(),
      email: input.email,
      address: {
        line_1: input.line_1,
        line_2: input.line_2,
        postal_code: input.postal_code,
        city: input.city,
        state: input.state,
        country: input.country
      }
    };
    var sanitizedPayload = removeEmptyAttributes(payload);
    var inputStatesAfterValidation = widgetFields.reduce(function (result, field) {
      if (!enableDoubleOptIn && field != null && field.required && field != null && field.id && (input[field.id] === 'off' || input[field.id].trim() === '')) {
        result[field.id] = false;
        return result;
      }

      if (field != null && field.required && field != null && field.name && input[field.name].trim() === '') {
        result[field.name] = false;
        return result;
      }

      if ((field == null ? void 0 : field.name) === 'phone' && input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
        result['phone'] = validatePhoneNumber(input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim());
        return result;
      }

      if ((field == null ? void 0 : field.name) === 'email' && input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
        result['email'] = validateEmail(input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim());
        return result;
      }

      if (field != null && field.name) {
        result[field.name] = true;
      } else if (field != null && field.id) {
        result[field.id] = true;
      }

      return result;
    }, _extends({}, inputStates));
    setInputState(function (prev) {
      return _extends({}, prev, inputStatesAfterValidation);
    });
    var validationFailed = Object.values(inputStatesAfterValidation).some(function (val) {
      return !val;
    });

    if (!validationFailed) {
      client.createCustomer(sanitizedPayload, enableDoubleOptIn).then(function (_response) {
        if (_response.object === 'unconfirmed_customer') {
          setInput(function (prev) {
            return _extends({}, prev, {
              voucherifySubscribeStatus: UNCONFIRMED_CUSTOMER
            });
          });
          return;
        }

        setInput(function (prev) {
          return _extends({}, prev, {
            voucherifySubscribeStatus: textSubscribeSuccess
          });
        });

        if (loadedConsents.length !== 0) {
          var createdCustomerId = _response.id;

          var _consents = _objectWithoutPropertiesLoose(input, ["name", "email", "phone", "line_1", "line_2", "postal_code", "city", "state", "country", "voucherifySubscribeStatus", "voucherifySubscribe", "voucherifyTracking"]);

          Object.keys(_consents).forEach(function (key) {
            _consents[key] = _consents[key] === 'on';
          });
          return client.updateConsents(createdCustomerId, _consents);
        }

        return;
      }).then(function (_response) {
        setDisabled(true);
        setVisible(false);
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifySubscribeStatus: true
          });
        });
        setInput(function (prev) {
          return _extends({}, prev, {
            name: '',
            email: '',
            phone: '',
            line_1: '',
            line_2: '',
            postal_code: '',
            city: '',
            state: '',
            country: '',
            voucherifySubscribe: ''
          });
        });
        if (typeof onSubscribed === 'function') onSubscribed(_response);
      })["catch"](function (err) {
        setVisible(false);
        console.error(err);
        setInputState(function (prev) {
          return _extends({}, prev, {
            voucherifySubscribe: false
          });
        });
        setInput(function (prev) {
          return _extends({}, prev, {
            voucherifySubscribeStatus: ERROR_MESSAGE
          });
        });
        if (typeof onError === 'function') onError(err);
      })["finally"](function () {
        return setSubmitting(false);
      });
    } else {
      setSubmitting(false);
    }
  }, [input, onError, onSubscribed]);
  return createElement("div", {
    className: "voucherifyContainer wide"
  }, createElement(VoucherifyLogo, {
    src: logoSrc,
    alt: logoAlt
  }), loading ? createElement("div", {
    className: "loader"
  }, "Loading consents...") : createElement(Fragment, null, customerFields.some(function (val) {
    return val.name === 'name';
  }) && createInput('name', (_customerFields$find = customerFields.find(function (field) {
    return field.name === 'name';
  })) == null ? void 0 : _customerFields$find.placeholder), createElement("div", {
    className: "voucherifyRow",
    style: {
      display: visible ? 'flex' : 'none'
    }
  }, createInput('email', emailPlaceholder), customerFields.some(function (val) {
    return val.name === 'phone';
  }) && createInput('phone', (_customerFields$find2 = customerFields.find(function (field) {
    return field.name === 'phone';
  })) == null ? void 0 : _customerFields$find2.placeholder)), customerFields.some(function (val) {
    return val.name === 'line_1';
  }) && createInput('line_1', (_customerFields$find3 = customerFields.find(function (field) {
    return field.name === 'line_1';
  })) == null ? void 0 : _customerFields$find3.placeholder), customerFields.some(function (val) {
    return val.name === 'line_2';
  }) && createInput('line_2', (_customerFields$find4 = customerFields.find(function (field) {
    return field.name === 'line_2';
  })) == null ? void 0 : _customerFields$find4.placeholder), customerFields.some(function (val) {
    return val.name === 'postal_code' || val.name === 'city';
  }) && createElement("div", {
    className: "voucherifyRow",
    style: {
      display: visible ? 'flex' : 'none'
    }
  }, customerFields.some(function (val) {
    return val.name === 'postal_code';
  }) && createInput('postal_code', (_customerFields$find5 = customerFields.find(function (field) {
    return field.name === 'postal_code';
  })) == null ? void 0 : _customerFields$find5.placeholder), customerFields.some(function (val) {
    return val.name === 'city';
  }) && createInput('city', (_customerFields$find6 = customerFields.find(function (field) {
    return field.name === 'city';
  })) == null ? void 0 : _customerFields$find6.placeholder)), customerFields.some(function (val) {
    return val.name === 'state' || val.name === 'country';
  }) && createElement("div", {
    className: "voucherifyRow",
    style: {
      display: visible ? 'flex' : 'none'
    }
  }, customerFields.some(function (val) {
    return val.name === 'state';
  }) && createInput('state', (_customerFields$find7 = customerFields.find(function (field) {
    return field.name === 'state';
  })) == null ? void 0 : _customerFields$find7.placeholder), customerFields.some(function (val) {
    return val.name === 'country';
  }) && createInput('country', (_customerFields$find8 = customerFields.find(function (field) {
    return field.name === 'country';
  })) == null ? void 0 : _customerFields$find8.placeholder)), createElement("div", {
    className: consentsError ? "voucherifySubscribeStatus " + classNameInvalid + " " + classNameInvalidAnimation : "voucherifySubscribeStatus " + classNameValid + " " + classNameValidAnimation,
    style: {
      display: !visible ? 'block' : 'none'
    }
  }, createElement("p", null, input['voucherifySubscribeStatus'])), !enableDoubleOptIn && loadedConsents.length !== 0 && loadedConsents.map(function (consent) {
    return createElement(Fragment, null, classNames.some(function (val) {
      return val.name === consent.id;
    }) && createElement("label", {
      className: "voucherifyCheckboxContainer",
      style: {
        display: visible ? 'block' : 'none'
      }
    }, consent.description, createElement("input", {
      type: "checkbox",
      id: consent.name,
      name: consent.id,
      onChange: onInputChange,
      value: input[consent.id] === 'on' ? 'on' : 'off'
    }), createElement("span", {
      className: "voucherifyCheckmark " + classNames.find(function (cls) {
        return cls.name === consent.id;
      }).classes
    })));
  }), createElement("button", {
    className: classNames.find(function (cls) {
      return cls.name === 'voucherifySubscribe';
    }).classes,
    disabled: isSubmitting || allDisabled,
    onClick: onSubmit,
    style: {
      display: visible ? 'block' : 'none'
    }
  }, createElement("span", {
    className: "voucherifySubscribeText"
  }, textSubscribe))));
}

export { VoucherifyPublish, VoucherifyRedeem, VoucherifySubscribe, VoucherifyValidate };
//# sourceMappingURL=voucherifywidget.esm.js.map
