import { useState } from "react";
import { Card } from "../ui/card";
import { Label } from "@/components/ui/label";
import { NumericInput } from "@/components/ui/numeric-input";
// import { useCard } from "@/hooks/useCard";

const normalizeZero = (value: number): number => {
  return value === 0 ? 0 : value;
};

export const CashFlowInput = () => {
  // const { cards, loading, error, refetch } = useCard();

  // 流動資産
  const [currentAssets, setCurrentAssets] = useState({
    cash_prev: 0, // 現預金（前期）
    cash_current: 0, // 現預金（当期）
    receivables_prev: 0, // 売掛金＋受取手形（前期）
    receivables_current: 0, // 売掛金＋受取手形（当期）
    inventory_prev: 0, // 棚卸資産（前期）
    inventory_current: 0, // 棚卸資産（当期）
    securities_prev: 0, // 有価証券（前期）
    securities_current: 0, // 有価証券（当期）
    shortTermLoans_prev: 0, // 短期貸付金（前期）
    shortTermLoans_current: 0, // 短期貸付金（当期）
    deferredTaxAssets_prev: 0, // 繰越税金資産（前期）
    deferredTaxAssets_current: 0, // 繰越税金資産（当期）
    otherCurrentAssets_prev: 0, // その他流動資産（前期）
    otherCurrentAssets_current: 0, // その他流動資産（当期）
  });

  const totalCurrentAssetsPrev =
    (currentAssets.cash_prev || 0) +
    (currentAssets.receivables_prev || 0) +
    (currentAssets.inventory_prev || 0) +
    (currentAssets.securities_prev || 0) +
    (currentAssets.shortTermLoans_prev || 0) +
    (currentAssets.deferredTaxAssets_prev || 0) +
    (currentAssets.otherCurrentAssets_prev || 0);

  const totalCurrentAssetsCurrent =
    (currentAssets.cash_current || 0) +
    (currentAssets.receivables_current || 0) +
    (currentAssets.inventory_current || 0) +
    (currentAssets.securities_current || 0) +
    (currentAssets.shortTermLoans_current || 0) +
    (currentAssets.deferredTaxAssets_current || 0) +
    (currentAssets.otherCurrentAssets_current || 0);

  // 固定資産
  const [fixedAssets, setFixedAssets] = useState({
    tangibleAssets_prev: 0, // 有形固定資産（前期）
    tangibleAssets_current: 0, // 有形固定資産（当期）
    intangibleAssets_prev: 0, // 無形固定資産（前期）
    intangibleAssets_current: 0, // 無形固定資産（当期）
    investmentSecurities_prev: 0, // 投資有価証券（前期）
    investmentSecurities_current: 0, // 投資有価証券（当期）
    longTermLoans_prev: 0, // 長期貸付金（前期）
    longTermLoans_current: 0, // 長期貸付金（当期）
    deferredTaxAssets_prev: 0, // 繰越税金資産（前期）
    deferredTaxAssets_current: 0, // 繰越税金資産（当期）
    otherFixedAssets_prev: 0, // その他固定資産（前期）
    otherFixedAssets_current: 0, // その他固定資産（当期）
  });

  const totalFixedAssetsPrev =
    (fixedAssets.tangibleAssets_prev || 0) +
    (fixedAssets.intangibleAssets_prev || 0) +
    (fixedAssets.investmentSecurities_prev || 0) +
    (fixedAssets.longTermLoans_prev || 0) +
    (fixedAssets.otherFixedAssets_prev || 0) +
    (fixedAssets.deferredTaxAssets_prev || 0);

  const totalFixedAssetsCurrent =
    (fixedAssets.tangibleAssets_current || 0) +
    (fixedAssets.intangibleAssets_current || 0) +
    (fixedAssets.investmentSecurities_current || 0) +
    (fixedAssets.longTermLoans_current || 0) +
    (fixedAssets.otherFixedAssets_current || 0) +
    (fixedAssets.deferredTaxAssets_current || 0);

  // 繰延資産
  const [deferredAssets, setDeferredAssets] = useState({
    deferredAssets_prev: 0,
    deferredAssets_current: 0,
  });

  // 資産合計
  const totalAssetsPrev =
    totalCurrentAssetsPrev +
    totalFixedAssetsPrev +
    (deferredAssets.deferredAssets_prev || 0);

  const totalAssetsCurrent =
    totalCurrentAssetsCurrent +
    totalFixedAssetsCurrent +
    (deferredAssets.deferredAssets_current || 0);

  // 流動負債
  const [currentLiabilities, setCurrentLiabilities] = useState({
    accountsPayable_prev: 0, // 買掛金＋支払手形（前期）
    accountsPayable_current: 0, // 買掛金＋支払手形（当期）
    shortTermBorrowings_prev: 0, // 短期借入金（前期）
    shortTermBorrowings_current: 0, // 短期借入金（当期）
    incomeTaxPayable_prev: 0, // 未払法人税（前期）
    incomeTaxPayable_current: 0, // 未払法人税（当期）
    deferredTaxLiabilities_prev: 0, // 繰延税金負債（前期）
    deferredTaxLiabilities_current: 0, // 繰延税金負債（当期）
    bonusReserve_prev: 0, // 賞与引当金（前期）
    bonusReserve_current: 0, // 賞与引当金（当期）
    retirementBenefits_prev: 0, // 退職給付引当金（前期）
    retirementBenefits_current: 0, // 退職給付引当金（当期）
    otherCurrentLiabilities_prev: 0, // その他の流動負債（前期）
    otherCurrentLiabilities_current: 0, // その他の流動負債（当期）
  });

  const totalCurrentLiabilitiesPrev =
    (currentLiabilities.accountsPayable_prev || 0) +
    (currentLiabilities.shortTermBorrowings_prev || 0) +
    (currentLiabilities.incomeTaxPayable_prev || 0) +
    (currentLiabilities.deferredTaxLiabilities_prev || 0) +
    (currentLiabilities.bonusReserve_prev || 0) +
    (currentLiabilities.retirementBenefits_prev || 0) +
    (currentLiabilities.otherCurrentLiabilities_prev || 0);

  const totalCurrentLiabilitiesCurrent =
    (currentLiabilities.accountsPayable_current || 0) +
    (currentLiabilities.shortTermBorrowings_current || 0) +
    (currentLiabilities.incomeTaxPayable_current || 0) +
    (currentLiabilities.deferredTaxLiabilities_current || 0) +
    (currentLiabilities.bonusReserve_current || 0) +
    (currentLiabilities.retirementBenefits_current || 0) +
    (currentLiabilities.otherCurrentLiabilities_current || 0);

  // 固定負債
  const [fixedLiabilities, setFixedLiabilities] = useState({
    longTermBorrowings_prev: 0, // 長期借入金・社債（前期)
    longTermBorrowings_current: 0, // 長期借入金・社債（当期)
    deferredTaxLiabilities_prev: 0, // 繰延税金負債（前期)
    deferredTaxLiabilities_current: 0, // 繰延税金負債（当期)
    retirementBenefits_prev: 0, // 退職給引当金（前期)
    retirementBenefits_current: 0, // 退職給引当金（当期)
    otherFixedLiabilities_prev: 0, // その他の固定負債（前期)
    otherFixedLiabilities_current: 0, // その他の固定負債（当期)
  });

  const totalFixedLiabilitiesPrev =
    (fixedLiabilities.longTermBorrowings_prev || 0) +
    (fixedLiabilities.deferredTaxLiabilities_prev || 0) +
    (fixedLiabilities.retirementBenefits_prev || 0) +
    (fixedLiabilities.otherFixedLiabilities_prev || 0);

  const totalFixedLiabilitiesCurrent =
    (fixedLiabilities.longTermBorrowings_current || 0) +
    (fixedLiabilities.deferredTaxLiabilities_current || 0) +
    (fixedLiabilities.retirementBenefits_current || 0) +
    (fixedLiabilities.otherFixedLiabilities_current || 0);

  // 負債合計
  const totalLiabilitiesPrev =
    totalCurrentLiabilitiesPrev + totalFixedLiabilitiesPrev;
  const totalLiabilitiesCurrent =
    totalCurrentLiabilitiesCurrent + totalFixedLiabilitiesCurrent;

  // 資本の部
  const [equity, setEquity] = useState({
    capitalStock_prev: 0, // 資本金（前期）
    capitalStock_current: 0, // 資本金（当期）
    retainedEarnings_prev: 0, // 利益剰余金（前期）
    retainedEarnings_current: 0, // 利益剰余金（当期）
    treasuryStock_prev: 0, // 繰越ヘッジ損益（前期）
    treasuryStock_current: 0, // 繰越ヘッジ損益（当期）
  });

  const totalEquityPrev =
    (equity.capitalStock_prev || 0) +
    (equity.retainedEarnings_prev || 0) +
    (equity.treasuryStock_prev || 0);

  const totalEquityCurrent =
    (equity.capitalStock_current || 0) +
    (equity.retainedEarnings_current || 0) +
    (equity.treasuryStock_current || 0);

  // 負債･資本合計
  const totalLiabilitiesAndEquityPrev = totalLiabilitiesPrev + totalEquityPrev;
  const totalLiabilitiesAndEquityCurrent =
    totalLiabilitiesCurrent + totalEquityCurrent;

  // バランスチェック
  const isBalancedPrev = totalAssetsPrev === totalLiabilitiesAndEquityPrev;
  const isBalancedCurrent =
    totalAssetsCurrent === totalLiabilitiesAndEquityCurrent;

  // 損益計算書
  const [incomeStatement, setIncomeStatement] = useState({
    pretaxIncome: 0, // 税引前当期純利益
    netIncome: 0, // 税引後当期純利益
    depreciation: 0, // 減価償却費
    interestIncome: 0, // 受取利息・配当金
    interestExpense: 0, // 支払利息
    securitiesGain: 0, // 有価証券売却益
    securitiesLoss: 0, // 有価証券売却損・評価損
    fixedAssetGain: 0, // 固定資産売却益
    fixedAssetLoss: 0, // 固定資産売却損及び廃棄損
  });

  // 利益処分
  const [appropriation, setAppropriation] = useState({
    dividends: 0, // 配当金の当期支出額
    executiveBonuses: 0, // 役員賞与の当期支出額
  });

  // キャッシュフロー計算書

  // 退職給引当金
  const retirementBenefitsChange = normalizeZero(
    currentLiabilities.retirementBenefits_current -
      currentLiabilities.retirementBenefits_prev +
      (fixedLiabilities.retirementBenefits_current -
        fixedLiabilities.retirementBenefits_prev)
  );

  // 賞与引当金
  const bonusReserveChange = normalizeZero(
    currentLiabilities.bonusReserve_current -
      currentLiabilities.bonusReserve_prev
  );

  // 受取利息・受取配当金
  const interestIncome = normalizeZero(incomeStatement.interestIncome * -1);

  // 有価証券売却損益･評価損
  const securities = normalizeZero(
    incomeStatement.securitiesLoss - incomeStatement.securitiesGain
  );

  // 固定資産売却損益･廃棄損
  const fixedAsset = normalizeZero(
    incomeStatement.fixedAssetLoss - incomeStatement.fixedAssetGain
  );

  // 繰越ヘッジ損益の増減
  const treasuryStockChange = normalizeZero(
    equity.treasuryStock_current - equity.treasuryStock_prev
  );

  // 売上債権減少（△増加）
  const receivablesChange = normalizeZero(
    -(currentAssets.receivables_current - currentAssets.receivables_prev)
  );

  // 棚卸資産減少（△増加）
  const inventoryChange = normalizeZero(
    -(currentAssets.inventory_current - currentAssets.inventory_prev)
  );

  // その他流動資産減少（△増加）
  const otherCurrentAssetsChange = normalizeZero(
    -(
      currentAssets.otherCurrentAssets_current -
      currentAssets.otherCurrentAssets_prev
    )
  );

  // 繰延資産減少（△増加）
  const deferredAssetsChange = normalizeZero(
    -(
      deferredAssets.deferredAssets_current - deferredAssets.deferredAssets_prev
    )
  );

  // 仕入債務増加（△減少）
  const accountsPayableChange = normalizeZero(
    currentLiabilities.accountsPayable_current -
      currentLiabilities.accountsPayable_prev
  );

  // その他流動負債増加（△減少）
  const otherCurrentLiabilitiesChange = normalizeZero(
    currentLiabilities.otherCurrentLiabilities_current -
      currentLiabilities.otherCurrentLiabilities_prev
  );

  // その他固定負債増加（△減少）
  const otherFixedLiabilitiesChange = normalizeZero(
    fixedLiabilities.otherFixedLiabilities_current -
      fixedLiabilities.otherFixedLiabilities_prev
  );

  // 役員賞与
  const executiveBonuses = normalizeZero(appropriation.executiveBonuses * -1);

  // 営業活動CF 小計1
  const operatingSubtotal1 =
    incomeStatement.pretaxIncome +
    incomeStatement.depreciation +
    retirementBenefitsChange +
    bonusReserveChange +
    interestIncome +
    incomeStatement.interestExpense +
    securities +
    fixedAsset +
    treasuryStockChange +
    receivablesChange +
    inventoryChange +
    otherCurrentAssetsChange +
    deferredAssetsChange +
    accountsPayableChange +
    otherCurrentLiabilitiesChange +
    otherFixedLiabilitiesChange +
    executiveBonuses;

  // 支払利息
  const interestExpense = normalizeZero(incomeStatement.interestExpense * -1);

  // 法人税等の支払額
  const incomeTaxesPaid = normalizeZero(
    incomeStatement.netIncome -
      incomeStatement.pretaxIncome -
      (currentAssets.deferredTaxAssets_current -
        currentAssets.deferredTaxAssets_prev) -
      (fixedAssets.deferredTaxAssets_current -
        fixedAssets.deferredTaxAssets_prev) +
      (currentLiabilities.deferredTaxLiabilities_current -
        currentLiabilities.deferredTaxLiabilities_prev) +
      (fixedLiabilities.deferredTaxLiabilities_current -
        fixedLiabilities.deferredTaxLiabilities_prev) +
      (currentLiabilities.incomeTaxPayable_current -
        currentLiabilities.incomeTaxPayable_prev)
  );

  // 営業活動CF 小計2
  const operatingSubtotal2 = normalizeZero(
    incomeStatement.interestIncome + interestExpense + incomeTaxesPaid
  );

  // 営業活動によるCF
  const totalOperatingCF = normalizeZero(
    operatingSubtotal1 + operatingSubtotal2
  );

  // 有形固定資産の減少（△増加）
  const tangibleAssetsChange = normalizeZero(
    -(fixedAssets.tangibleAssets_current - fixedAssets.tangibleAssets_prev) +
      incomeStatement.fixedAssetGain -
      incomeStatement.fixedAssetLoss -
      incomeStatement.depreciation
  );

  // 無形固定資産の減少（△増加）
  const intangibleAssetsChange = normalizeZero(
    -(fixedAssets.intangibleAssets_current - fixedAssets.intangibleAssets_prev)
  );

  // 有価証券の減少（△増加）
  const securitiesChange = normalizeZero(
    -(currentAssets.securities_current - currentAssets.securities_prev) -
      (fixedAssets.investmentSecurities_current -
        fixedAssets.investmentSecurities_prev) +
      incomeStatement.securitiesGain -
      incomeStatement.securitiesLoss
  );

  // 貸付金の減少（△増加）
  const loansChange = normalizeZero(
    -(
      currentAssets.shortTermLoans_current - currentAssets.shortTermLoans_prev
    ) -
      (fixedAssets.longTermLoans_current - fixedAssets.longTermLoans_prev)
  );

  // その他固定資産の減少（△増加）
  const otherFixedAssetsChange = normalizeZero(
    -(fixedAssets.otherFixedAssets_current - fixedAssets.otherFixedAssets_prev)
  );

  // 投資活動によるCF
  const totalInvestingCF = normalizeZero(
    tangibleAssetsChange +
      intangibleAssetsChange +
      securitiesChange +
      loansChange +
      otherFixedAssetsChange
  );

  // 短期借入金の増加（△減少）
  const shortTermBorrowingsChange = normalizeZero(
    currentLiabilities.shortTermBorrowings_current -
      currentLiabilities.shortTermBorrowings_prev
  );

  // 長期借入金･社債の増加（△減少）
  const longTermBorrowingsChange = normalizeZero(
    fixedLiabilities.longTermBorrowings_current -
      fixedLiabilities.longTermBorrowings_prev
  );

  // 増資
  const capitalIncrease = normalizeZero(
    equity.capitalStock_current - equity.capitalStock_prev
  );

  // 支払配当金
  const dividendsPaid = normalizeZero(-appropriation.dividends);

  // 財務活動によるCF
  const totalFinancingCF = normalizeZero(
    shortTermBorrowingsChange +
      longTermBorrowingsChange +
      capitalIncrease +
      dividendsPaid
  );

  // 現預金残高の増加（△減少）
  const cashIncrease = normalizeZero(
    currentAssets.cash_current - currentAssets.cash_prev
  );

  // CF合計チェック
  const isCashFlowBalanced =
    cashIncrease === totalOperatingCF + totalInvestingCF + totalFinancingCF;

  // if (loading) {
  //   return (
  //     <Card className="p-6">
  //       <div className="flex items-center justify-center h-32">
  //         <p>Loading...</p>
  //       </div>
  //     </Card>
  //   );
  // }

  // if (error) {
  //   return (
  //     <Card className="p-6">
  //       <div className="flex items-center justify-center h-32">
  //         <p className="text-red-500">Error: {error.message}</p>
  //       </div>
  //     </Card>
  //   );
  // }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-3">
        <div className="ps-2">
          <h2 className="text-2xl font-bold">Cash Flow Statement</h2>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <Card className="col-span-5 p-6 min-h-[800px] overflow-y-auto">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b pb-2">
                【資借対照表】
              </h3>
              <h4 className="font-semibold mt-4 mb-0">流動資産</h4>
              <div className="grid grid-cols-3 gap-4 items-center">
                <Label className="text-sm"></Label>
                <div className="text-right me-2 text-sm font-medium">前期</div>
                <div className="text-right me-2 text-sm font-medium">当期</div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">現預金</Label>
                <NumericInput
                  className="text-right"
                  value={currentAssets.cash_prev}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      cash_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentAssets.cash_current}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      cash_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">売掛金＋受取手形</Label>
                <NumericInput
                  className="text-right"
                  value={currentAssets.receivables_prev}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      receivables_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentAssets.receivables_current}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      receivables_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">棚卸資産</Label>
                <NumericInput
                  className="text-right"
                  value={currentAssets.inventory_prev}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      inventory_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentAssets.inventory_current}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      inventory_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">有価証券</Label>
                <NumericInput
                  className="text-right"
                  value={currentAssets.securities_prev}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      securities_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentAssets.securities_current}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      securities_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">短期貸付金</Label>
                <NumericInput
                  className="text-right"
                  value={currentAssets.shortTermLoans_prev}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      shortTermLoans_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentAssets.shortTermLoans_current}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      shortTermLoans_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">繰延税金資産</Label>
                <NumericInput
                  className="text-right"
                  value={currentAssets.deferredTaxAssets_prev}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      deferredTaxAssets_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentAssets.deferredTaxAssets_current}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      deferredTaxAssets_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">その他流動資産</Label>
                <NumericInput
                  className="text-right"
                  value={currentAssets.otherCurrentAssets_prev}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      otherCurrentAssets_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentAssets.otherCurrentAssets_current}
                  onValueChange={(value) =>
                    setCurrentAssets((prev) => ({
                      ...prev,
                      otherCurrentAssets_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">流動資産計</Label>
                <div className="text-right py-2 px-3">
                  {totalCurrentAssetsPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalCurrentAssetsCurrent.toLocaleString()}
                </div>
              </div>
              <hr className="mt-8" />
              <h4 className="font-semibold mt-8">固定資産</h4>
              <div className="grid grid-cols-3 gap-4 items-center">
                <Label className="text-sm"></Label>
                <div className="text-right me-2 text-sm font-medium">前期</div>
                <div className="text-right me-2 text-sm font-medium">当期</div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">有形固定資産</Label>
                <NumericInput
                  className="text-right"
                  value={fixedAssets.tangibleAssets_prev}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      tangibleAssets_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedAssets.tangibleAssets_current}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      tangibleAssets_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">無形固定資産</Label>
                <NumericInput
                  className="text-right"
                  value={fixedAssets.intangibleAssets_prev}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      intangibleAssets_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedAssets.intangibleAssets_current}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      intangibleAssets_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">投資有価証券</Label>
                <NumericInput
                  className="text-right"
                  value={fixedAssets.investmentSecurities_prev}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      investmentSecurities_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedAssets.investmentSecurities_current}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      investmentSecurities_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">長期貸付金</Label>
                <NumericInput
                  className="text-right"
                  value={fixedAssets.longTermLoans_prev}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      longTermLoans_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedAssets.longTermLoans_current}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      longTermLoans_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">繰延税金資産</Label>
                <NumericInput
                  className="text-right"
                  value={fixedAssets.deferredTaxAssets_prev}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      deferredTaxAssets_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedAssets.deferredTaxAssets_current}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      deferredTaxAssets_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">その他固定資産</Label>
                <NumericInput
                  className="text-right"
                  value={fixedAssets.otherFixedAssets_prev}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      otherFixedAssets_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedAssets.otherFixedAssets_current}
                  onValueChange={(value) =>
                    setFixedAssets((prev) => ({
                      ...prev,
                      otherFixedAssets_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">固定資産計</Label>
                <div className="text-right py-2 px-3">
                  {totalFixedAssetsPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalFixedAssetsCurrent.toLocaleString()}
                </div>
              </div>
              <hr className="mt-8" />
              <h4 className="font-semibold mt-8">繰延資産</h4>
              <div className="grid grid-cols-3 gap-4 items-center">
                <Label className="text-sm"></Label>
                <div className="text-right me-2 text-sm font-medium">前期</div>
                <div className="text-right me-2 text-sm font-medium">当期</div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">繰延資産</Label>
                <NumericInput
                  className="text-right"
                  value={deferredAssets.deferredAssets_prev}
                  onValueChange={(value) =>
                    setDeferredAssets((prev) => ({
                      ...prev,
                      deferredAssets_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={deferredAssets.deferredAssets_current}
                  onValueChange={(value) =>
                    setDeferredAssets((prev) => ({
                      ...prev,
                      deferredAssets_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">資産合計</Label>
                <div className="text-right py-2 px-3">
                  {totalAssetsPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalAssetsCurrent.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <hr className="mt-8" />
              <h4 className="font-semibold mt-4 mb-0">流動負債</h4>
              <div className="grid grid-cols-3 gap-4 items-center">
                <Label className="text-sm"></Label>
                <div className="text-right me-2 text-sm font-medium">前期</div>
                <div className="text-right me-2 text-sm font-medium">当期</div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">買掛金＋支払手形</Label>
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.accountsPayable_prev}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      accountsPayable_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.accountsPayable_current}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      accountsPayable_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">短期借入金</Label>
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.shortTermBorrowings_prev}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      shortTermBorrowings_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.shortTermBorrowings_current}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      shortTermBorrowings_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">未払法人税等</Label>
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.incomeTaxPayable_prev}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      incomeTaxPayable_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.incomeTaxPayable_current}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      incomeTaxPayable_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">繰延税金負債</Label>
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.deferredTaxLiabilities_prev}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      deferredTaxLiabilities_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.deferredTaxLiabilities_current}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      deferredTaxLiabilities_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">賞与引当金</Label>
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.bonusReserve_prev}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      bonusReserve_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.bonusReserve_current}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      bonusReserve_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">退職給引当金</Label>
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.retirementBenefits_prev}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      retirementBenefits_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.retirementBenefits_current}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      retirementBenefits_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">その他流動負債</Label>
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.otherCurrentLiabilities_prev}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      otherCurrentLiabilities_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={currentLiabilities.otherCurrentLiabilities_current}
                  onValueChange={(value) =>
                    setCurrentLiabilities((prev) => ({
                      ...prev,
                      otherCurrentLiabilities_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">流動負債計</Label>
                <div className="text-right py-2 px-3">
                  {totalCurrentLiabilitiesPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalCurrentLiabilitiesCurrent.toLocaleString()}
                </div>
              </div>
              <hr className="mt-8" />
              <h4 className="font-semibold mt-4 mb-0">固定負債</h4>
              <div className="grid grid-cols-3 gap-4 items-center">
                <Label className="text-sm"></Label>
                <div className="text-right me-2 text-sm font-medium">前期</div>
                <div className="text-right me-2 text-sm font-medium">当期</div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">長期借入金･社債</Label>
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.longTermBorrowings_prev}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      longTermBorrowings_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.longTermBorrowings_current}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      longTermBorrowings_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">繰延税金負債</Label>
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.deferredTaxLiabilities_prev}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      deferredTaxLiabilities_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.deferredTaxLiabilities_current}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      deferredTaxLiabilities_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">退職給引当金</Label>
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.retirementBenefits_prev}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      retirementBenefits_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.retirementBenefits_current}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      retirementBenefits_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">その他固定負債</Label>
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.otherFixedLiabilities_prev}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      otherFixedLiabilities_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={fixedLiabilities.otherFixedLiabilities_current}
                  onValueChange={(value) =>
                    setFixedLiabilities((prev) => ({
                      ...prev,
                      otherFixedLiabilities_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">固定負債計</Label>
                <div className="text-right py-2 px-3">
                  {totalFixedLiabilitiesPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalFixedLiabilitiesCurrent.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">負債合計</Label>
                <div className="text-right py-2 px-3">
                  {totalLiabilitiesPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalLiabilitiesCurrent.toLocaleString()}
                </div>
              </div>

              <hr className="mt-8" />
              <h4 className="font-semibold mt-4 mb-0">資本</h4>
              <div className="grid grid-cols-3 gap-4 items-center">
                <Label className="text-sm"></Label>
                <div className="text-right me-2 text-sm font-medium">前期</div>
                <div className="text-right me-2 text-sm font-medium">当期</div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">資本金･資本剰余金</Label>
                <NumericInput
                  className="text-right"
                  value={equity.capitalStock_prev}
                  onValueChange={(value) =>
                    setEquity((prev) => ({
                      ...prev,
                      capitalStock_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={equity.capitalStock_current}
                  onValueChange={(value) =>
                    setEquity((prev) => ({
                      ...prev,
                      capitalStock_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">利益剰余金</Label>
                <NumericInput
                  className="text-right"
                  value={equity.retainedEarnings_prev}
                  onValueChange={(value) =>
                    setEquity((prev) => ({
                      ...prev,
                      retainedEarnings_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={equity.retainedEarnings_current}
                  onValueChange={(value) =>
                    setEquity((prev) => ({
                      ...prev,
                      retainedEarnings_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="text-sm">繰延ヘッジ損益</Label>
                <NumericInput
                  className="text-right"
                  value={equity.treasuryStock_prev}
                  onValueChange={(value) =>
                    setEquity((prev) => ({
                      ...prev,
                      treasuryStock_prev: value || 0,
                    }))
                  }
                />
                <NumericInput
                  className="text-right"
                  value={equity.treasuryStock_current}
                  onValueChange={(value) =>
                    setEquity((prev) => ({
                      ...prev,
                      treasuryStock_current: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">資本合計</Label>
                <div className="text-right py-2 px-3">
                  {totalEquityPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalEquityCurrent.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 font-semibold">
                <Label className="text-sm">負債･資本合計</Label>
                <div className="text-right py-2 px-3">
                  {totalLiabilitiesAndEquityPrev.toLocaleString()}
                </div>
                <div className="text-right py-2 px-3">
                  {totalLiabilitiesAndEquityCurrent.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0 pt-4 border-t">
                <Label className="text-sm">貸借バランスチェック</Label>
                <div
                  className={`text-sm text-right py-2 px-3 ${
                    isBalancedPrev ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isBalancedPrev ? "OK" : "NG"}
                </div>
                <div
                  className={`text-sm text-right py-2 px-3 ${
                    isBalancedCurrent ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isBalancedCurrent ? "OK" : "NG"}
                </div>
              </div>
              {(!isBalancedPrev || !isBalancedCurrent) && (
                <div className="grid grid-cols-3 gap-4 items-center ps-2 text-sm">
                  <Label className="text-sm">差異</Label>
                  <div className="text-sm text-right py-1 px-3">
                    {!isBalancedPrev &&
                      (
                        totalAssetsPrev - totalLiabilitiesAndEquityPrev
                      ).toLocaleString()}
                  </div>
                  <div className="text-sm text-right py-1 px-3">
                    {!isBalancedCurrent &&
                      (
                        totalAssetsCurrent - totalLiabilitiesAndEquityCurrent
                      ).toLocaleString()}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b mt-12 pb-2">
                【損益計算書】
              </h3>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">
                  (税引前) 当期純利益
                </Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.pretaxIncome}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      pretaxIncome: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">
                  (税引後) 当期純利益
                </Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.netIncome}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      netIncome: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">
                  減価償却費 (販管費＋製造原価等)
                </Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.depreciation}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      depreciation: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">受取利息･配当金</Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.interestIncome}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      interestIncome: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">支払利息</Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.interestExpense}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      interestExpense: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">有価証券売却益</Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.securitiesGain}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      securitiesGain: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">
                  有価証券売却損･評価損
                </Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.securitiesLoss}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      securitiesLoss: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">固定資産売却益</Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.fixedAssetGain}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      fixedAssetGain: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">
                  固定資産売却損･廃棄損
                </Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={incomeStatement.fixedAssetLoss}
                  onValueChange={(value) =>
                    setIncomeStatement((prev) => ({
                      ...prev,
                      fixedAssetLoss: value || 0,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg border-b mt-12 pb-2">
                【前期の利益処分計算書】
              </h3>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">配当金の当期支出額</Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={appropriation.dividends}
                  onValueChange={(value) =>
                    setAppropriation((prev) => ({
                      ...prev,
                      dividends: value || 0,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2">
                <Label className="col-span-2 text-sm">
                  役員賞与の当期支出額
                </Label>
                <NumericInput
                  className="col-start-3 text-right"
                  value={appropriation.executiveBonuses}
                  onValueChange={(value) =>
                    setAppropriation((prev) => ({
                      ...prev,
                      executiveBonuses: value || 0,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="col-span-5 p-6 min-h-[800px] overflow-y-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-bold text-lg border-b pb-2">
                【キャシュフロー計算書】
              </h3>
              <h4 className="font-semibold mt-4 mb-4">
                I. 営業活動によるキャッシュ・フロー
              </h4>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">税引前当期純利益</Label>
                <div className="text-right py-2 px-3">
                  {incomeStatement.pretaxIncome.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">減価償却費</Label>
                <div className="text-right py-2 px-3">
                  {incomeStatement.depreciation.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">退職給引当金</Label>
                <div className="text-right py-2 px-3">
                  {retirementBenefitsChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">賞与引当金</Label>
                <div className="text-right py-2 px-3">
                  {bonusReserveChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  受取利息･受取配当金
                </Label>
                <div className="text-right py-2 px-3">
                  {interestIncome.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">支払利息</Label>
                <div className="text-right py-2 px-3">
                  {incomeStatement.interestExpense.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  有価証券売却損益・評価損
                </Label>
                <div className="text-right py-2 px-3">
                  {securities.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  固定資産売却損益・廃棄損
                </Label>
                <div className="text-right py-2 px-3">
                  {fixedAsset.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  繰延ヘッジ損益の増減
                </Label>
                <div className="text-right py-2 px-3">
                  {treasuryStockChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  売上債権減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {receivablesChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  棚卸資産減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {inventoryChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  その他流動資産減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {otherCurrentAssetsChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  繰延資産減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {deferredAssetsChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  仕入債務増加 (△減少)
                </Label>
                <div className="text-right py-2 px-3">
                  {accountsPayableChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  その他の流動負債増加 (△減少)
                </Label>
                <div className="text-right py-2 px-3">
                  {otherCurrentLiabilitiesChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  その他の固定負債増加 (△減少)
                </Label>
                <div className="text-right py-2 px-3">
                  {otherFixedLiabilitiesChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">役員賞与</Label>
                <div className="text-right py-2 px-3">
                  {executiveBonuses.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-4 mb-0">
                <Label className="col-span-2 text-sm">小 計</Label>
                <div className="text-right py-2 px-3">
                  {operatingSubtotal1.toLocaleString()}
                </div>
              </div>
              <hr className="mt-4" />
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  利息及び配当金の受取額
                </Label>
                <div className="text-right py-2 px-3">
                  {incomeStatement.interestIncome.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">利息の支払額</Label>
                <div className="text-right py-2 px-3">
                  {interestExpense.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">法人税等の支払額</Label>
                <div className="text-right py-2 px-3">
                  {incomeTaxesPaid.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-4 mb-0">
                <Label className="col-span-2 text-sm">小 計</Label>
                <div className="text-right py-2 px-3">
                  {operatingSubtotal2.toLocaleString()}
                </div>
              </div>
              <hr className="mt-4" />
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">営業活動によるCF</Label>
                <div className="text-right py-2 px-3">
                  {totalOperatingCF.toLocaleString()}
                </div>
              </div>

              <h4 className="font-semibold mt-12 mb-4">
                II. 投資活動によるキャッシュ・フロー
              </h4>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  有形固定資産の減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {tangibleAssetsChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  無形固定資産の減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {intangibleAssetsChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  有価証券の減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {securitiesChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  貸付金の減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {loansChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  その他の固定資産の減少 (△増加)
                </Label>
                <div className="text-right py-2 px-3">
                  {otherFixedAssetsChange.toLocaleString()}
                </div>
              </div>
              <hr className="mt-4" />
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">投資活動によるCF</Label>
                <div className="text-right py-2 px-3">
                  {totalInvestingCF.toLocaleString()}
                </div>
              </div>

              <h4 className="font-semibold mt-12 mb-4">
                III. 財務活動によるキャッシュ・フロー
              </h4>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  短期借入金の増加 (△減少)
                </Label>
                <div className="text-right py-2 px-3">
                  {shortTermBorrowingsChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  長期借入金･社債の増加 (△減少)
                </Label>
                <div className="text-right py-2 px-3">
                  {longTermBorrowingsChange.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">増資</Label>
                <div className="text-right py-2 px-3">
                  {capitalIncrease.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">支払配当金</Label>
                <div className="text-right py-2 px-3">
                  {dividendsPaid.toLocaleString()}
                </div>
              </div>
              <hr className="mt-4" />
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">財務活動によるCF</Label>
                <div className="text-right py-2 px-3">
                  {totalFinancingCF.toLocaleString()}
                </div>
              </div>

              <h4 className="font-semibold mt-12 mb-4">IV. 現預金</h4>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">
                  現預金残高の増加（△減少）
                </Label>
                <div className="text-right py-2 px-3">
                  {cashIncrease.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">期首現預金残高</Label>
                <div className="text-right py-2 px-3">
                  {currentAssets.cash_prev.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0">
                <Label className="col-span-2 text-sm">期末現預金残高</Label>
                <div className="text-right py-2 px-3">
                  {currentAssets.cash_current.toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center ps-2 mb-0 pt-4 border-t">
                <Label className="col-span-2 text-sm">CF合計チェック</Label>
                <div
                  className={`col-start-3 text-sm text-right py-2 px-3 ${
                    isCashFlowBalanced ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isCashFlowBalanced ? "OK" : "NG"}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
