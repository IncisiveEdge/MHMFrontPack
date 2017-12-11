import RouterData from './RouterMetaData'

function subRouteConfig () {
  let route = []
  RouterData.forEach(function (item) {
    if (item) {
      route.push(getRoute(item))
    }
  })
  return route
}

function getRoute (url) {
  let path = url.replace('.jsp', '')
  path.indexOf('/') === 0 && (path = path.substring(1))
  let index = path.indexOf('?')
  const query = parseQuery(path)
  if (index !== -1) {
    path = path.substring(0, index)
  }
  path = '/' + path
  const route = {
    path: `'${path}'`,
    query,
    component: `%^&*require('../..${path}')%^&*`,
    meta: {
      expanded: false,
      show: false
    }
  }
  return route
}
function parseQuery (url) {
  if (!url) return
  const index = url.indexOf('?')
  if (index !== -1) {
    const paramString = url.substring(index + 1).split('&')
    let query = {}
    paramString.forEach(item => {
      const itemSplit = item.split('=')
      if (itemSplit && itemSplit.length === 2) {
        query[itemSplit[0].trim()] = itemSplit[1].trim()
      }
    })
    return query
  }
}
//
let route = subRouteConfig()
// route.unshift({ path: '/nofound', component: `require('../components/Nofound')`, name: 'NOFOUND', meta: {show: false} })
// console.log(JSON.stringify(route))

route = [{
  path: '/nofound',
  component: require('../components/Nofound'),
  name: 'NOFOUND',
  meta: {show: false}
}, {
  path: '/Home',
  query: {v: 1},
  component: require('../Home'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Customer/Ent/EntCustomerList',
  component: require('../Modules/Customer/Ent/EntCustomerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Customer/Ind/IndCustomerList',
  component: require('../Modules/Customer/Ind/IndCustomerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Customer/CustomerRelationList',
  component: require('../Modules/Customer/CustomerRelationList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Customer/Group/GroupCustomerList',
  component: require('../Modules/Customer/Group/GroupCustomerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Customer/ThirdPart/ThirdPartCustomerList',
  component: require('../Modules/Customer/ThirdPart/ThirdPartCustomerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Customer/BusinessOpportunity/BusinessOpportunityList',
  component: require('../Modules/Customer/BusinessOpportunity/BusinessOpportunityList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Project/HandOver/ProjectHandOverList',
  component: require('../Modules/Credit/Project/HandOver/ProjectHandOverList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Customer/CstCreditApplyList',
  component: require('../Modules/Credit/Customer/CstCreditApplyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Project/ProCreditApplyList',
  component: require('../Modules/Credit/Project/ProCreditApplyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Supplier/ImportAgentCreditList',
  component: require('../Modules/Credit/Supplier/ImportAgentCreditList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Supplier/SpeImportAgentCreditList',
  component: require('../Modules/Credit/Supplier/SpeImportAgentCreditList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Supplier/SupplierCreditList',
  component: require('../Modules/Credit/Supplier/SupplierCreditList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Supplier/HealthAgentCreditList',
  component: require('../Modules/Credit/Supplier/HealthAgentCreditList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Supplier/HealthSAgentCreditList',
  component: require('../Modules/Credit/Supplier/HealthSAgentCreditList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Limit/CstCreditLimitList',
  component: require('../Modules/Credit/Limit/CstCreditLimitList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Limit/ProCreditLimitList',
  component: require('../Modules/Credit/Limit/ProCreditLimitList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Institutional/InstitutionalBreakthroughList',
  component: require('../Modules/Credit/Institutional/InstitutionalBreakthroughList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Outline/OutlineAgreementList',
  component: require('../Modules/Credit/Outline/OutlineAgreementList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Outline/HandDocument/OutlineHandDocList',
  component: require('../Modules/Credit/Outline/HandDocument/OutlineHandDocList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Innovation/InnovationSetUp/InnovationApplyList',
  component: require('../Modules/Credit/Innovation/InnovationSetUp/InnovationApplyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Innovation/InnovationSign/InnovationSignApplyList',
  component: require('../Modules/Credit/Innovation/InnovationSign/InnovationSignApplyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Credit/Innovation/InnovationShowList/InnoShowTabs',
  component: require('../Modules/Credit/Innovation/InnovationShowList/InnoShowTabs'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/Account/ContractAccountList',
  component: require('../Modules/Contract/Account/ContractAccountList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/Approve/ContractApproveList',
  component: require('../Modules/Contract/Approve/ContractApproveList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/Change/ContractChangeList',
  component: require('../Modules/Contract/Change/ContractChangeList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/SenderBillSetting/SenderBillSettingList',
  component: require('../Modules/Contract/SenderBillSetting/SenderBillSettingList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/Transfer/ContractTransferList',
  component: require('../Modules/Contract/Transfer/ContractTransferList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/Cancel/ContractCancelList',
  component: require('../Modules/Contract/Cancel/ContractCancelList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/Invalid/ContractInvalidList',
  component: require('../Modules/Contract/Invalid/ContractInvalidList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/ContractPrint/ContractPrintList',
  component: require('../Modules/Contract/ContractPrint/ContractPrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Contract/FilePrint/FilePrintList',
  component: require('../Modules/Contract/FilePrint/FilePrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/Bill/CommerceBillCheckList',
  component: require('../Modules/Commerce/Bill/CommerceBillCheckList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/AdvPmtManage/CapitalSchedule/ContractList',
  component: require('../Modules/Commerce/AdvPmtManage/CapitalSchedule/ContractList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Rental/VeriAccountStatementList',
  component: require('../Modules/Asset/Rental/VeriAccountStatementList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/AdvPmtManage/PayApply/CmePayApplyList',
  component: require('../Modules/Commerce/AdvPmtManage/PayApply/CmePayApplyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/OnHire/OnHireConfirmList',
  component: require('../Modules/Commerce/OnHire/OnHireConfirmList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/Abnormal/CmeAbnomalTab',
  component: require('../Modules/Commerce/Abnormal/CmeAbnomalTab'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/Logistical/Inquire/LogisticalInquireList',
  component: require('../Modules/Commerce/Logistical/Inquire/LogisticalInquireList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/Logistical/Track/LogisticalTrackList',
  component: require('../Modules/Commerce/Logistical/Track/LogisticalTrackList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/Insurance/CommerceAssetCoverList',
  component: require('../Modules/Commerce/Insurance/CommerceAssetCoverList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/Insurance/CommerceCoverDownLoadTab',
  component: require('../Modules/Commerce/Insurance/CommerceCoverDownLoadTab'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/Insurance/CommerceInsuranceSetList',
  component: require('../Modules/Commerce/Insurance/CommerceInsuranceSetList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/OnHire/OnHireManageList',
  component: require('../Modules/Asset/OnHire/OnHireManageList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/OnHire/SetRuleList',
  component: require('../Modules/Asset/OnHire/SetRuleList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/NoticeOfManagement/NoticeOfManagementList',
  component: require('../Modules/Asset/NoticeOfManagement/NoticeOfManagementList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/RentManagement/RentPlanMaintenance/RentPlanMaintenanceMain',
  component: require('../Modules/Asset/RentManagement/RentPlanMaintenance/RentPlanMaintenanceMain'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/OverDeu/OverDeuList',
  component: require('../Modules/Asset/OverDeu/OverDeuList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Rental/VeriAccountStatementList',
  component: require('../Modules/Asset/Rental/VeriAccountStatementList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/PaySetting/PaySettingTab',
  component: require('../Modules/Asset/PaySetting/PaySettingTab'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Deposit/DepositList',
  component: require('../Modules/Asset/Deposit/DepositList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Rental/RentalVerification',
  component: require('../Modules/Asset/Rental/RentalVerification'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/AdvPmtManage/CapitalSchedule/ContractList',
  component: require('../Modules/Commerce/AdvPmtManage/CapitalSchedule/ContractList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Commerce/AdvPmtManage/CapitalSchedule/ContractList',
  component: require('../Modules/Commerce/AdvPmtManage/CapitalSchedule/ContractList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Impairment/ImpairmentSetList',
  component: require('../Modules/Asset/Impairment/ImpairmentSetList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssetManagement/AssetClassifyConfirm/AssetClassifyConfirmList\n',
  component: require('../Modules/Asset/AssetManagement/AssetClassifyConfirm/AssetClassifyConfirmList\n'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssetManagement/AssetClassifyChange/AssetClassifyChangeList',
  component: require('../Modules/Asset/AssetManagement/AssetClassifyChange/AssetClassifyChangeList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssertInspect/AstInspectList',
  component: require('../Modules/Asset/AssertInspect/AstInspectList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Change/AssetChangeList',
  component: require('../Modules/Asset/Change/AssetChangeList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/ChangeContractPrint/AssetChangeContractPrintList',
  component: require('../Modules/Asset/ChangeContractPrint/AssetChangeContractPrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/ChangeTransfer/AssetsChangeTransferList',
  component: require('../Modules/Asset/ChangeTransfer/AssetsChangeTransferList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/OwnerShipSwitch/OwnershipList',
  component: require('../Modules/Asset/OwnerShipSwitch/OwnershipList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/ProjectVerify/ProjectVerifyList',
  component: require('../Modules/Asset/ProjectVerify/ProjectVerifyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssetManagement/MajorMatter/MajorMatterList',
  component: require('../Modules/Asset/AssetManagement/MajorMatter/MajorMatterList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/ClaimTransfer/ClaimTransferList',
  component: require('../Modules/Asset/ClaimTransfer/ClaimTransferList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/TicketMaintenance/AstTicketMaintenanceList',
  component: require('../Modules/Asset/TicketMaintenance/AstTicketMaintenanceList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssetAccount/AssetAccountList',
  component: require('../Modules/Asset/AssetAccount/AssetAccountList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/PayLawsuitApply/LawsuitCmePayApplyList',
  component: require('../Modules/Asset/PayLawsuitApply/LawsuitCmePayApplyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Claim/AstClaimList',
  component: require('../Modules/Asset/Claim/AstClaimList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AstDisposal/AstEntrustLawyerList',
  component: require('../Modules/Asset/AstDisposal/AstEntrustLawyerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/LawSuit/LawSuitList',
  component: require('../Modules/Asset/LawSuit/LawSuitList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/LawSuitCase/LawSuitCaseList',
  component: require('../Modules/Asset/LawSuitCase/LawSuitCaseList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules\\Asset\\LawsuitStandingBook\\LawSuitStandingBookInfo',
  component: require('../Modules\\Asset\\LawsuitStandingBook\\LawSuitStandingBookInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/RiskMeetting/AstGroupMeettingList',
  component: require('../Modules/Asset/RiskMeetting/AstGroupMeettingList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssetDisposalChange/AssetDisposalChangeList',
  component: require('../Modules/Asset/AssetDisposalChange/AssetDisposalChangeList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AstContractDocPrint/AstDisChangeContractPrintList',
  component: require('../Modules/Asset/AstContractDocPrint/AstDisChangeContractPrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AstContractHand/AstDisChangeHandList',
  component: require('../Modules/Asset/AstContractHand/AstDisChangeHandList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssetAccountRent/AssetAccount/AssetAccountList',
  component: require('../Modules/Asset/AssetAccountRent/AssetAccount/AssetAccountList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/AssetAccountRent/RentAccount/RentAccountList',
  component: require('../Modules/Asset/AssetAccountRent/RentAccount/RentAccountList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Guarantee/GuarantyList',
  component: require('../Modules/Asset/Guarantee/GuarantyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/Leasehold/LeaseholdList',
  component: require('../Modules/Asset/Leasehold/LeaseholdList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Asset/MissionSetting/MissionSettingList',
  component: require('../Modules/Asset/MissionSetting/MissionSettingList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Channel/ChannelList',
  component: require('../Modules/Fund/Channel/ChannelList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Channel/FndThirdpartyInfoList',
  component: require('../Modules/Fund/Channel/FndThirdpartyInfoList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Channel/GuarantorChannelList',
  component: require('../Modules/Fund/Channel/GuarantorChannelList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Product/ProductList',
  component: require('../Modules/Fund/Product/ProductList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Product/GuaranteeMattersLedgerList',
  component: require('../Modules/Fund/Product/GuaranteeMattersLedgerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Calculate/FndCalculateList',
  component: require('../Modules/Fund/Calculate/FndCalculateList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Drawing/DrawingList',
  component: require('../Modules/Fund/Drawing/DrawingList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Drawing/GuaranteeLetterList',
  component: require('../Modules/Fund/Drawing/GuaranteeLetterList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Drawing/RepayCapitalAndInteresApplytList',
  component: require('../Modules/Fund/Drawing/RepayCapitalAndInteresApplytList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Drawing/FinancingProjectVfList',
  component: require('../Modules/Fund/Drawing/FinancingProjectVfList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/AssetPackage/SecondarySubScribe/SecondarySubScribeList',
  component: require('../Modules/Fund/AssetPackage/SecondarySubScribe/SecondarySubScribeList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/AssetPackage/AssetPackageManage/AssetPackageList',
  component: require('../Modules/Fund/AssetPackage/AssetPackageManage/AssetPackageList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/LoanLedger/LoanLedgerList',
  component: require('../Modules/Fund/LoanLedger/LoanLedgerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/LoanAgreementLedger/LoanAgreementLedgerList',
  component: require('../Modules/Fund/LoanAgreementLedger/LoanAgreementLedgerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Calculate/CalculateInfo',
  component: require('../Modules/Fund/Calculate/CalculateInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/DerivativeLedger/InterestRateOptionLedger/InterestRateLedgerList',
  component: require('../Modules/Fund/DerivativeLedger/InterestRateOptionLedger/InterestRateLedgerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/DerivativeLedger/ForeignExchangeSwap/ForeignSwapeLedgerList',
  component: require('../Modules/Fund/DerivativeLedger/ForeignExchangeSwap/ForeignSwapeLedgerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/DerivativeLedger/CurrencySwapeLedger/CurrencySwapeLedgerList',
  component: require('../Modules/Fund/DerivativeLedger/CurrencySwapeLedger/CurrencySwapeLedgerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Invest/Quota/InvestQuotaList',
  component: require('../Modules/Fund/Invest/Quota/InvestQuotaList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Invest/Term/TermInvestList',
  component: require('../Modules/Fund/Invest/Term/TermInvestList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Invest/Current/CurrentInvestList',
  component: require('../Modules/Fund/Invest/Current/CurrentInvestList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/AccountTransferredImport/BankAccountImport',
  component: require('../Modules/Fund/AccountTransferredImport/BankAccountImport'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Bill/BillAccountsImport',
  component: require('../Modules/Fund/Bill/BillAccountsImport'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FndDeptPayment/PaymentNaBusiness',
  component: require('../Modules/Fund/FndDeptPayment/PaymentNaBusiness'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FndDeptPayment/PaymentFinance',
  component: require('../Modules/Fund/FndDeptPayment/PaymentFinance'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FndDeptPayment/PaymentInvest',
  component: require('../Modules/Fund/FndDeptPayment/PaymentInvest'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FndDeptPayment/PrePaymentMain',
  component: require('../Modules/Fund/FndDeptPayment/PrePaymentMain'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FndDeptPayment/TrusteePaymentList',
  component: require('../Modules/Fund/FndDeptPayment/TrusteePaymentList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FndDeptPayment/PaymentConfirmMain',
  component: require('../Modules/Fund/FndDeptPayment/PaymentConfirmMain'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FndDeptPayment/PaymentOperationRecord',
  component: require('../Modules/Fund/FndDeptPayment/PaymentOperationRecord'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Bill/BillJoinPaperPay/PaperPay',
  component: require('../Modules/Fund/Bill/BillJoinPaperPay/PaperPay'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Bill/BillLedgerOfBank',
  component: require('../Modules/Fund/Bill/BillLedgerOfBank'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Bill/BillJoinReceived/BillJoinReceive',
  component: require('../Modules/Fund/Bill/BillJoinReceived/BillJoinReceive'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/Bill/BillPool/BillPool',
  component: require('../Modules/Fund/Bill/BillPool/BillPool'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/BaseInfo/CompanyAccountList',
  component: require('../Modules/Fund/BaseInfo/CompanyAccountList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/BaseInfo/AccountSetting',
  component: require('../Modules/Fund/BaseInfo/AccountSetting'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/BaseInfo/DictMainten',
  component: require('../Modules/Fund/BaseInfo/DictMainten'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FundInquiry/FundContactList',
  component: require('../Modules/Fund/FundInquiry/FundContactList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FundInquiry/DrawMoneyLedger/DrawMoneyLedgerList',
  component: require('../Modules/Fund/FundInquiry/DrawMoneyLedger/DrawMoneyLedgerList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FundInquiry/RepayCapitalInterQueryList/FundRepayCapInList',
  component: require('../Modules/Fund/FundInquiry/RepayCapitalInterQueryList/FundRepayCapInList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/AssetPackage/AssetPackageLedger/ABSList',
  component: require('../Modules/Fund/AssetPackage/AssetPackageLedger/ABSList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Fund/FundInquiry/MarginAccount/MarginAccList',
  component: require('../Modules/Fund/FundInquiry/MarginAccount/MarginAccList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/BillingSetting',
  component: require('../Modules/Finance/BillingSetting/BillingSetting'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/BillingPlanMaintenanceList',
  component: require('../Modules/Finance/BillingSetting/BillingPlanMaintenanceList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/InvoiceMaintenanceList',
  component: require('../Modules/Finance/BillingSetting/InvoiceMaintenanceList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/InvoiceAccountList',
  component: require('../Modules/Finance/BillingSetting/InvoiceAccountList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/InvoiceNullifyList',
  component: require('../Modules/Finance/BillingSetting/InvoiceNullifyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/IncomeInvoiceList',
  component: require('../Modules/Finance/BillingSetting/IncomeInvoiceList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/IncomeManageList',
  component: require('../Modules/Finance/BillingSetting/IncomeManageList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/IncomeReturnList',
  component: require('../Modules/Finance/BillingSetting/IncomeReturnList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BillingSetting/ExceptionQueryList',
  component: require('../Modules/Finance/BillingSetting/ExceptionQueryList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Accounting/LoanList',
  component: require('../Modules/Accounting/LoanList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Accounting/LoanList2',
  component: require('../Modules/Accounting/LoanList2'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Accounting/InterestAdjustList',
  component: require('../Modules/Accounting/InterestAdjustList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Accounting/AdjustHistoryQueryList',
  component: require('../Modules/Accounting/AdjustHistoryQueryList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/BusinessTaxMain/TaxInformaService',
  component: require('../Modules/Finance/BusinessTaxMain/TaxInformaService'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Finance/PrecollectionMana/PrecollectionManaList',
  component: require('../Modules/Finance/PrecollectionMana/PrecollectionManaList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/documentTransfer/documentTransfer',
  component: require('../Modules/FileManage/documentTransfer/documentTransfer'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/financeInvoice/noticePrintList',
  component: require('../Modules/FileManage/financeInvoice/noticePrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/financeInvoice/receiptPrintList',
  component: require('../Modules/FileManage/financeInvoice/receiptPrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/financeInvoice/valueAddedTaxInvoice',
  component: require('../Modules/FileManage/financeInvoice/valueAddedTaxInvoice'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/financeInvoice/invoiceLibraryManage',
  component: require('../Modules/FileManage/financeInvoice/invoiceLibraryManage'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/InvalidBill/InvalidBill',
  component: require('../Modules/FileManage/InvalidBill/InvalidBill'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/Image/ImageFileQuery',
  component: require('../Modules/FileManage/Image/ImageFileQuery'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/LetterSend/sendAddressPrintList',
  component: require('../Modules/FileManage/LetterSend/sendAddressPrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/LetterSend/letterSendList',
  component: require('../Modules/FileManage/LetterSend/letterSendList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/LetterSend/voteAllocationCheck',
  component: require('../Modules/FileManage/LetterSend/voteAllocationCheck'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/LetterSend/fileListPrintList',
  component: require('../Modules/FileManage/LetterSend/fileListPrintList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/Barcode/BarcodePrint',
  component: require('../Modules/FileManage/Barcode/BarcodePrint'),
  meta: {expanded: false, show: false}
}, {
  path: '/U',
  component: require('../U'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/interestAdjustPrint/interestAdjustPrint',
  component: require('../Modules/FileManage/interestAdjustPrint/interestAdjustPrint'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/FileManage/Company/manageCompany',
  component: require('../Modules/FileManage/Company/manageCompany'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Company/CompanyList',
  component: require('../Config/Company/CompanyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/Org/OrgTreeSelect',
  component: require('../System/Org/OrgTreeSelect'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/User/UserList',
  component: require('../System/User/UserList'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/Role/RoleList',
  component: require('../System/Role/RoleList'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/Right/SysRightTab',
  component: require('../System/Right/SysRightTab'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/RightCustomize/SysCustRightList',
  component: require('../System/RightCustomize/SysCustRightList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Workflow/WorkflowDesign',
  component: require('../Config/Workflow/WorkflowDesign'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Workflow/Resource/WorkflowResource',
  component: require('../Config/Workflow/Resource/WorkflowResource'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Workflow/WorkflowMonitor',
  component: require('../Config/Workflow/WorkflowMonitor'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/DecistionTable/DecisionTableList',
  component: require('../Config/DecistionTable/DecisionTableList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Product/ProductDefinitionList',
  component: require('../Config/Product/ProductDefinitionList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/AcctRulesTemplate/LACRulesTemplateList',
  component: require('../Config/AcctRulesTemplate/LACRulesTemplateList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/InterestRate/InterestTab',
  component: require('../Config/InterestRate/InterestTab'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/ExchangeRate/ExchangeRateList',
  component: require('../Config/ExchangeRate/ExchangeRateList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Vacation/BrcVacationList',
  component: require('../Config/Vacation/BrcVacationList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Bom/BomList',
  component: require('../Config/Bom/BomList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Capital/CapitalScheduleTypeConfig',
  component: require('../Config/Capital/CapitalScheduleTypeConfig'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/RightCustomize/ImportProxyList',
  component: require('../System/RightCustomize/ImportProxyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/BusinessModule/BusinessModuleList',
  component: require('../Config/BusinessModule/BusinessModuleList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Common/FnaStat/FnastatList',
  component: require('../Common/FnaStat/FnastatList'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/Detector/AutoDetect',
  component: require('../System/Detector/AutoDetect'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/FormatDoc/FDCPandectList',
  component: require('../Config/FormatDoc/FDCPandectList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Inquiry/InquireModel/InquireModelList',
  component: require('../Config/Inquiry/InquireModel/InquireModelList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/TypeOfDoc/TypeOfDocumentList',
  component: require('../Config/TypeOfDoc/TypeOfDocumentList'),
  meta: {expanded: false, show: false}
}, {
  path: '/u',
  component: require('../u'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/Menu/MenuList',
  component: require('../System/Menu/MenuList'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/DoLibrary/AweDoLibrary',
  component: require('../System/DoLibrary/AweDoLibrary'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/CodeLibrary/CodeLibrary',
  component: require('../System/CodeLibrary/CodeLibrary'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/Database/DatabaseMain',
  component: require('../System/Database/DatabaseMain'),
  meta: {expanded: false, show: false}
}, {
  path: '/System/RuntimeEnvironment/Log',
  component: require('../System/RuntimeEnvironment/Log'),
  meta: {expanded: false, show: false}
}, {
  path: '/ping',
  component: require('../ping'),
  meta: {expanded: false, show: false}
}, {
  path: '/Modules/Customer/Rate/RateSystemManager',
  component: require('../Modules/Customer/Rate/RateSystemManager'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/OldExamplePersonEditableList',
  component: require('../ShowCase/OWList/OldExamplePersonEditableList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonReadonlyList',
  component: require('../ShowCase/OWList/ExamplePersonReadonlyList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonEditableList',
  component: require('../ShowCase/OWList/ExamplePersonEditableList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonEditableValidList',
  component: require('../ShowCase/OWList/ExamplePersonEditableValidList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonFuncList',
  component: require('../ShowCase/OWList/ExamplePersonFuncList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonCustomizeSearchList',
  component: require('../ShowCase/OWList/ExamplePersonCustomizeSearchList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonDefaultNoDataList',
  component: require('../ShowCase/OWList/ExamplePersonDefaultNoDataList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonLimitBySessionUserList',
  component: require('../ShowCase/OWList/ExamplePersonLimitBySessionUserList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/ExamplePersonDoTempSeparateList',
  component: require('../ShowCase/OWList/ExamplePersonDoTempSeparateList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/CascadeDrillSearch',
  component: require('../ShowCase/OWList/CascadeDrillSearch'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWList/TreeGridList',
  component: require('../ShowCase/OWList/TreeGridList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonSimpleInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonSimpleInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonGroupWithValidInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonGroupWithValidInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonFuncInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonFuncInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonXColumnsInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonXColumnsInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonXColumnsInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonXColumnsInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonXColumnsInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonXColumnsInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonListInInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonListInInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/OWInfo/ExamplePersonSeparateInfo',
  component: require('../ShowCase/OWInfo/ExamplePersonSeparateInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/TreeNav/TreeNavIndexTabs',
  component: require('../ShowCase/LayoutUI/TreeNav/TreeNavIndexTabs'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/Tabs/TabsWithIframe/TabsWithIframeIndex',
  component: require('../ShowCase/LayoutUI/Tabs/TabsWithIframe/TabsWithIframeIndex'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/Tabs/TabsWithInclude/TabsWithIncludeIndex',
  component: require('../ShowCase/LayoutUI/Tabs/TabsWithInclude/TabsWithIncludeIndex'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/Tabs/TabsWithDom/TabsWithDomIndex',
  component: require('../ShowCase/LayoutUI/Tabs/TabsWithDom/TabsWithDomIndex'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/Tabs/TabsOutterInvoker/TabsOutterInvokerPersonList',
  component: require('../ShowCase/LayoutUI/Tabs/TabsOutterInvoker/TabsOutterInvokerPersonList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/DiversePickers',
  component: require('../ShowCase/LayoutUI/DiversePickers'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/InteractionUIFaces',
  component: require('../ShowCase/LayoutUI/InteractionUIFaces'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/FormComponents',
  component: require('../ShowCase/LayoutUI/FormComponents'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/RichText/RichTextDemo1',
  component: require('../ShowCase/RichText/RichTextDemo1'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/FileUpload/FileUploadDemo',
  component: require('../ShowCase/FileUpload/FileUploadDemo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/IconManage/IconLibs',
  component: require('../ShowCase/IconManage/IconLibs'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/LayoutUI/StepWizard',
  component: require('../ShowCase/LayoutUI/StepWizard'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/BasicFrame/RestInvoker',
  component: require('../ShowCase/BasicFrame/RestInvoker'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/BasicFrame/RestWithParameterInvoker',
  component: require('../ShowCase/BasicFrame/RestWithParameterInvoker'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/BasicFrame/RestAsyncInvoker',
  component: require('../ShowCase/BasicFrame/RestAsyncInvoker'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/BasicFrame/LanguageI18n',
  component: require('../ShowCase/BasicFrame/LanguageI18n'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/BasicFrame/LinkInteraction',
  component: require('../ShowCase/BasicFrame/LinkInteraction'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/ListCascadeInfo',
  component: require('../ShowCase/CommonSolution/ListCascadeInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/InfoContainsList',
  component: require('../ShowCase/CommonSolution/InfoContainsList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/DynamicGroupInfo',
  component: require('../ShowCase/CommonSolution/DynamicGroupInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/ExamplePersonDetector',
  component: require('../ShowCase/CommonSolution/ExamplePersonDetector'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/JavascriptArrayApi',
  component: require('../ShowCase/CommonSolution/JavascriptArrayApi'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/FormatDocDemo',
  component: require('../ShowCase/CommonSolution/FormatDocDemo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/WebOffice/PageOffice/SimpleDemo',
  component: require('../ShowCase/WebOffice/PageOffice/SimpleDemo'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/LoanCalulatorList',
  component: require('../ShowCase/CommonSolution/LoanCalulatorList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/LoanCalulator',
  component: require('../ShowCase/CommonSolution/LoanCalulator'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/ImportExcelIntoList',
  component: require('../ShowCase/CommonSolution/ImportExcelIntoList'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/CommonSolution/ImportExcelIntoInfo',
  component: require('../ShowCase/CommonSolution/ImportExcelIntoInfo'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Product/ProductDefinitionList',
  component: require('../Config/Product/ProductDefinitionList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/DecistionTable/DecisionTableList',
  component: require('../Config/DecistionTable/DecisionTableList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/AcctRulesTemplate/LACRulesTemplateList',
  component: require('../Config/AcctRulesTemplate/LACRulesTemplateList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/FormatDoc/FDCPandectList',
  component: require('../Config/FormatDoc/FDCPandectList'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Workflow/WorkflowDesign',
  component: require('../Config/Workflow/WorkflowDesign'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Workflow/Resource/WorkflowResource',
  component: require('../Config/Workflow/Resource/WorkflowResource'),
  meta: {expanded: false, show: false}
}, {
  path: '/Config/Workflow/WorkflowMonitor',
  component: require('../Config/Workflow/WorkflowMonitor'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/SelfDef/FrontApplet/WordGame',
  component: require('../ShowCase/SelfDef/FrontApplet/WordGame'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/SelfDef/FrontApplet/HanoiTower',
  component: require('../ShowCase/SelfDef/FrontApplet/HanoiTower'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/SelfDef/FrontApplet/SortAnimation',
  component: require('../ShowCase/SelfDef/FrontApplet/SortAnimation'),
  meta: {expanded: false, show: false}
}, {
  path: '/ShowCase/SelfDef/FrontApplet/ColorPicker',
  component: require('../ShowCase/SelfDef/FrontApplet/ColorPicker'),
  meta: {expanded: false, show: false}
}]
