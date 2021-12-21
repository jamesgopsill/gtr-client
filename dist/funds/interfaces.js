"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundsSortField = exports.FundsSearchField = void 0;
var FundsSearchField;
(function (FundsSearchField) {
    FundsSearchField["FUNDED_PROJECT_TITLE"] = "fu.pro.t";
    FundsSearchField["FUND_AMOUNT"] = "fu.am";
    FundsSearchField["FUNDER_ORGANISATION_NAME"] = "fu.org.n";
    FundsSearchField["FUND_TYPE"] = "fu.ty";
})(FundsSearchField = exports.FundsSearchField || (exports.FundsSearchField = {}));
var FundsSortField;
(function (FundsSortField) {
    FundsSortField["FUND_START_DATE"] = "fu.sd";
    FundsSortField["FUND_AMOUNT"] = "fu.am";
    FundsSortField["FUND_TYPE"] = "fu.ty";
    FundsSortField["FUND_END_DATE"] = "fu.ed";
    FundsSortField["RELEVANCE"] = "score";
})(FundsSortField = exports.FundsSortField || (exports.FundsSortField = {}));
