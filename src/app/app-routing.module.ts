import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ForPatientsComponent } from './for-patients/for-patients.component';
import { ForProvidersComponent } from './for-providers/for-providers.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InsuranceOptionsComponent } from './insurance-options/insurance-options.component';
import { PlanningYourRetirementComponent } from './planning-your-retirement/planning-your-retirement.component';
import { HealthcareResourcesComponent } from './healthcare-resources/healthcare-resources.component';
import { MedicalIndustryOverviewComponent } from './medical-industry-overview/medical-industry-overview.component';
import { MedicareComponent } from './medicare/medicare.component';
import { MedicareInsuranceComponent } from './medicare-insurance/medicare-insurance.component';
import { MedicaidComponent } from './medicaid/medicaid.component';
import { IndividualFamilyHealthInsuranceComponent } from './individual-family-health-insurance/individual-family-health-insurance.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';
import { MedicalGroupsComponent } from './medical-groups/medical-groups.component';
import { MedicalGlossaryComponent } from './medical-glossary/medical-glossary.component';
import { NewsComponent } from './news/news.component';
import { AboutHealthcareHelpersComponent } from './about-healthcare-helpers/about-healthcare-helpers.component';
import { MyPhilosophyComponent } from './my-philosophy/my-philosophy.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { IndividualAndFamilyPlansComponent } from './individual-and-family-plans/individual-and-family-plans.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';
import { AnnuitiesComponent } from './annuities/annuities.component';
import { LongTermCareComponent } from './long-term-care/long-term-care.component';
import { DentalVisionComponent } from './dental-vision/dental-vision.component';
import { AccidentCancerDisabilityComponent } from './accident-cancer-disability/accident-cancer-disability.component';
import { Turning65Component } from './turning-65/turning-65.component';
import { PlanningYourRetirementSummeryComponent } from './planning-your-retirement-summery/planning-your-retirement-summery.component';
import { StillWorkingComponent } from './still-working/still-working.component';
import { TaxesInRetirement } from './taxes-in-retirement/taxes-in-retirement.component';
import { OtherFormsOfHealthcareComponent } from './other-forms-of-healthcare/other-forms-of-healthcare.component';
import { HowToMaximizeSocialSecurityComponent } from './how-to-maximize-social-security/how-to-maximize-social-security.component';
import { WhoWillTakeCareOfYouComponent } from './who-will-take-care-of-you/who-will-take-care-of-you.component';
import { PreparingYourEstateComponent } from './preparing-your-estate/preparing-your-estate.component';
import { ResourceLibraryComponent } from './resource-library/resource-library.component';
import { TrainingEventsVideosWebinarsComponent } from './training-events-videos-webinars/training-events-videos-webinars.component';
// import { MedicalTermsComponent } from './medical-terms/medical-terms.component';
import { HealthcareTermsComponent } from './healthcare-terms/healthcare-terms.component';
import { LifeInsuranceTermsComponent } from './life-insurance-terms/life-insurance-terms.component';
import { MedicareCalculatorsComponent } from './medicare-calculators/medicare-calculators.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

// New components
import { CaregiverSurvivalTipsComponent } from './caregiver-resources/caregiver-survival-tips/caregiver-survival-tips.component';
import { FiveStepsForAdvanceCarePlanningComponent } from './caregiver-resources/five-steps-for-advance-care-planning/five-steps-for-advance-care-planning.component';
import { HousingOptionsForOlderAdultsComponent } from './caregiver-resources/housing-options-for-older-adults/housing-options-for-older-adults.component';
import { LongTermCarePlanningComponent } from './caregiver-resources/long-term-care-planning/long-term-care-planning.component';
// import { TheHistoryOfVaccinesComponent } from './vaccines/the-history-of-vaccines/the-history-of-vaccines.component';
import { HowVaccinesStopDiseaseFromSpreadingComponent } from './vaccines/how-vaccines-stop-disease-from-spreading/how-vaccines-stop-disease-from-spreading.component';
import { HowTheCovidVaccineWorksComponent } from './vaccines/how-the-covid-vaccine-works/how-the-covid-vaccine-works.component';
import { HowToChooseAPlanComponent } from './medicare/how-to-choose-a-plan/how-to-choose-a-plan.component';
import { HowToWorkWithAPharmacistComponent } from './medicare/how-to-work-with-a-pharmacist/how-to-work-with-a-pharmacist.component';
import { VaccinesOverviewComponent } from './vaccines/vaccines-overview/vaccines-overview.component';
import { MedicareArticleComponent } from './medicare/medicare-article/medicare-article.component';
import { MedicareOverviewComponent } from './medicare/medicare-overview/medicare-overview.component';
import { CaregiverResourcesComponent } from './caregiver-resources/caregiver-resources.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { ArticleOverviewComponent } from './article-overview/article-overview.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { DiseaseComponent } from './disease/disease.component';
import { TheHistoryOfDiseasePart1HowWeSeeItComponent } from './disease/the-history-of-disease-part-1-how-we-see-it/the-history-of-disease-part-1-how-we-see-it.component';
import { TheHistoryOfDiseasePart2HowDiseasesEvolvedAndSpreadComponent } from './disease/the-history-of-disease-part-2-how-diseases-evolved-and-spread/the-history-of-disease-part-2-how-diseases-evolved-and-spread.component';
import { ModernDayDiseasesDifferentGenerationsDifferentHealthProblemsComponent } from './disease/modern-day-diseases-different-generations-different-health-problems/modern-day-diseases-different-generations-different-health-problems.component';
import { ModernDayDiseaseManagementComponent } from './disease/modern-day-disease-management/modern-day-disease-management.component';
import { TheHistoryOfVaccinesComponent } from './disease/the-history-of-vaccines/the-history-of-vaccines.component';
import { HowVaccinesWorkComponent } from './disease/how-vaccines-work/how-vaccines-work.component';
import { Top10DiseasesAndTheirRiskFactorsComponent } from './disease/top-10-diseases-and-their-risk-factors/top-10-diseases-and-their-risk-factors.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BasicsOfExerciseComponent } from './exercise/basics-of-exercise/basics-of-exercise.component';
import { AgeAppropriateExerciseComponent } from './exercise/age-appropriate-exercise/age-appropriate-exercise.component';
import { StayingStrongAsYouAgeComponent } from './exercise/staying-strong-as-you-age/staying-strong-as-you-age.component';

import { MakingTheMostOfYourTherapyAppointmentsComponent } from './mental-health/making-the-most-of-your-therapy-appointments/making-the-most-of-your-therapy-appointments.component';
import { HowToDevelopResilienceWhenYouAreExperiencingHealthIssuesComponent } from './mental-health/how-to-develop-resilience-when-you-are-experiencing-health-issues/how-to-develop-resilience-when-you-are-experiencing-health-issues.component';
import { FiveBestWaysToManageAnxietyComponent } from './mental-health/five-best-ways-to-manage-anxiety/five-best-ways-to-manage-anxiety.component';
import { SimpleWaysToManageYourMentalHealthComponent } from './mental-health/simple-ways-to-manage-your-mental-health/simple-ways-to-manage-your-mental-health.component';
import { TheBenefitsOfBreathingComponent } from './mental-health/the-benefits-of-breathing/the-benefits-of-breathing.component';
import { ThePositiveRoleOfStressInYourLifeComponent } from './mental-health/the-positive-role-of-stress-in-your-life/the-positive-role-of-stress-in-your-life.component';
import { TheImportanceOfSleepComponent } from './mental-health/the-importance-of-sleep/the-importance-of-sleep.component';
import { Trauma101Component } from './mental-health/trauma-101/trauma-101.component';
import { Trauma102Component } from './mental-health/trauma-102/trauma-102.component';
import { AdvancementsInPreventingAndManagingCognitiveDeclineComponent } from './mental-health/advancements-in-preventing-and-managing-cognitive-decline/advancements-in-preventing-and-managing-cognitive-decline.component';
import { TestingForCognitiveDeclineComponent } from './mental-health/testing-for-cognitive-decline/testing-for-cognitive-decline.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProtectYourselfFromScamsComponent } from './technology/protect-yourself-from-scams/protect-yourself-from-scams.component';
import { HowSeniorsCanProtectThemselvesFromAiScamsComponent } from './technology/how-seniors-can-protect-themselves-from-ai-scams/how-seniors-can-protect-themselves-from-ai-scams.component';
import { GenomicMappingAndTheFutureOfHealthcareComponent } from './technology/genomic-mapping-and-the-future-of-healthcare/genomic-mapping-and-the-future-of-healthcare.component';
import { HowToMakeTelehealthWorkComponent } from './technology/how-to-make-telehealth-work/how-to-make-telehealth-work.component';
import { AiTelehealthComponent } from './technology/ai-telehealth/ai-telehealth.component';
import { UnderstandingSocialMediaPitfallsAndPromisesComponent } from './technology/understanding-social-media-pitfalls-and-promises/understanding-social-media-pitfalls-and-promises.component';
import { HowTechnologyHasBecomeAPartOfYourHealthcareComponent } from './technology/how-technology-has-become-a-part-of-your-healthcare/how-technology-has-become-a-part-of-your-healthcare.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { HowToChooseADoctorComponent } from './healthcare/how-to-choose-a-doctor/how-to-choose-a-doctor.component';
import { HowToMakeTheMostOutOfYourDoctorVisitsComponent } from './healthcare/how-to-make-the-most-out-of-your-doctor-visits/how-to-make-the-most-out-of-your-doctor-visits.component';
import { HowToProcessYourDoctorVisitsComponent } from './healthcare/how-to-process-your-doctor-visits/how-to-process-your-doctor-visits.component';
import { WhatToDoWhenYouReceiveADiagnosisComponent } from './healthcare/what-to-do-when-you-receive-a-diagnosis/what-to-do-when-you-receive-a-diagnosis.component';
import { HowToMinimizeConfusionAndUncertaintyAfterYourDoctorVisitsComponent } from './healthcare/how-to-minimize-confusion-and-uncertainty-after-your-doctor-visits/how-to-minimize-confusion-and-uncertainty-after-your-doctor-visits.component';
import { BuildingYourPersonalHealthcareTeamComponent } from './healthcare/building-your-personal-healthcare-team/building-your-personal-healthcare-team.component';
import { WhyYouShouldSeeYourDoctorEvenIfYouAreHealthyComponent } from './healthcare/why-you-should-see-your-doctor-even-if-you-are-healthy/why-you-should-see-your-doctor-even-if-you-are-healthy.component';
import { PreparingForSurgeryComponent } from './healthcare/preparing-for-surgery/preparing-for-surgery.component';
import { WhatYourDoctorThinksAboutWhenGivingYouADiagnosisComponent } from './healthcare/what-your-doctor-thinks-about-when-giving-you-a-diagnosis/what-your-doctor-thinks-about-when-giving-you-a-diagnosis.component';
import { BehavioralHabitsComponent } from './behavioral-habits/behavioral-habits.component';
import { HabitsOfHappyPeopleComponent } from './behavioral-habits/habits-of-happy-people/habits-of-happy-people.component';
import { ThePowerOfPositivityComponent } from './behavioral-habits/the-power-of-positivity/the-power-of-positivity.component';
import { AgingHappilyComponent } from './behavioral-habits/aging-happily/aging-happily.component';
import { BoostingYourMoodWithFoodAndFitnessComponent } from './behavioral-habits/boosting-your-mood-with-food-and-fitness/boosting-your-mood-with-food-and-fitness.component';
import { StayingSocialComponent } from './behavioral-habits/staying-social/staying-social.component';
import { DecompressFromStressComponent } from './behavioral-habits/decompress-from-stress/decompress-from-stress.component';
import { PartnerWithYourDoctorComponent } from './behavioral-habits/partner-with-your-doctor/partner-with-your-doctor.component';
import { DiseaseVsDisEaseWhatItMeansToHealComponent } from './behavioral-habits/disease-vs-dis-ease-what-it-means-to-heal/disease-vs-dis-ease-what-it-means-to-heal.component';
import { TheBrainComponent } from './the-brain/the-brain.component';

import { HowTheBrainWorksPart1Component } from './the-brain/how-the-brain-works-part-1/how-the-brain-works-part-1.component';
import { HowTheBrainWorksPart2Component } from './the-brain/how-the-brain-works-part-2/how-the-brain-works-part-2.component';
import { HowTheBrainWorksPart3Component } from './the-brain/how-the-brain-works-part-3/how-the-brain-works-part-3.component';

import { DivingIntoAlzheimersComponent } from './the-brain/diving-into-alzheimers/diving-into-alzheimers.component';
import { DivingIntoDementiaComponent } from './the-brain/diving-into-dementia/diving-into-dementia.component';
import { DivingIntoParkinsonsComponent } from './the-brain/diving-into-parkinsons/diving-into-parkinsons.component';

import { AHealthyBrainComponent } from './the-brain/a-healthy-brain-understanding-and-nurturing-your-most-important-organ/a-healthy-brain-understanding-and-nurturing-your-most-important-organ.component';
import { HeadachesDecodedComponent } from './the-brain/headaches-decoded/headaches-decoded.component';
import { BattlingTheAgingBrainComponent } from './the-brain/battling-the-aging-brain/battling-the-aging-brain.component';
import { GiveYourBrainABoostComponent } from './the-brain/give-your-brain-a-boost/give-your-brain-a-boost.component';
import { TheAutisticMindComponent } from './the-brain/the-autistic-mind/the-autistic-mind.component';
import { DeathAndEndOfLifePlanningComponent } from './death-and-end-of-life-planning/death-and-end-of-life-planning.component';
import { DealingWithTerminalIllnessComponent } from './death-and-end-of-life-planning/dealing-with-terminal-illness/dealing-with-terminal-illness.component';
import { HowToPassAwayWithTranquilityComponent } from './death-and-end-of-life-planning/how-to-pass-away-with-tranquility/how-to-pass-away-with-tranquility.component';
import { DealingWithResentmentComponent } from './death-and-end-of-life-planning/dealing-with-resentment/dealing-with-resentment.component';
import { PlanningYourLegacyComponent } from './death-and-end-of-life-planning/planning-your-legacy/planning-your-legacy.component';
import { TheElephantInTheRoomWhyAreAmericansAfraidToTalkAboutDeathComponent } from './death-and-end-of-life-planning/the-elephant-in-the-room-why-are-americans-afraid-to-talk-about-death/the-elephant-in-the-room-why-are-americans-afraid-to-talk-about-death.component';
import { SevenTypesOfInsurancePoliciesYouDoAndDontNeedComponent } from './death-and-end-of-life-planning/seven-types-of-insurance-policies-you-do-and-dont-need/seven-types-of-insurance-policies-you-do-and-dont-need.component';
import { HowToBuyALifeInsurancePolicyAndWhatToAvoidComponent } from './death-and-end-of-life-planning/how-to-buy-a-life-insurance-policy-and-what-to-avoid/how-to-buy-a-life-insurance-policy-and-what-to-avoid.component';
import { PurchasingALifeInsurancePolicyComponent } from './death-and-end-of-life-planning/purchasing-a-life-insurance-policy/purchasing-a-life-insurance-policy.component';
import { WhenToBuyLongTermCareInsuranceComponent } from './death-and-end-of-life-planning/when-to-buy-long-term-care-insurance/when-to-buy-long-term-care-insurance.component';
import { IsLongTermCareInsuranceWorthItComponent } from './death-and-end-of-life-planning/is-long-term-care-insurance-worth-it/is-long-term-care-insurance-worth-it.component';
import { DisabilityInsuranceBenefitsCanHelpProtectYourAbilityToEarnComponent } from './death-and-end-of-life-planning/disability-insurance-benefits-can-help-protect-your-ability-to-earn/disability-insurance-benefits-can-help-protect-your-ability-to-earn.component';
import { WhatIsAnUmbrellaInsurancePolicyComponent } from './death-and-end-of-life-planning/what-is-an-umbrella-insurance-policy/what-is-an-umbrella-insurance-policy.component';
import { CommonMistakesInCreatingAWillComponent } from './death-and-end-of-life-planning/common-mistakes-in-creating-a-will/common-mistakes-in-creating-a-will.component';
import { WillsTrustsTaxesAndInheritanceMakingSenseOfEverythingComponent } from './death-and-end-of-life-planning/wills-trusts-taxes-and-inheritance-making-sense-of-everything/wills-trusts-taxes-and-inheritance-making-sense-of-everything.component';

import { FinancesComponent } from './finances/finances.component';
import { FinancialLiteracy101Component } from './finances/financial-literacy-101/financial-literacy-101.component';
import { Are529ContributionsTaxDeductibleComponent } from './finances/are-529-contributions-tax-deductible/are-529-contributions-tax-deductible.component';
import { IrsRulesForCaregiversComponent } from './finances/irs-rules-for-caregivers/irs-rules-for-caregivers.component';
import { CapitalizeOnTaxOpportunitiesComponent } from './finances/capitalize-on-tax-opportunities/capitalize-on-tax-opportunities.component';
import { MakingSenseOfRothConversionsComponent } from './finances/making-sense-of-roth-conversions/making-sense-of-roth-conversions.component';
import { AnnualFinancialPlanningChecklistComponent } from './finances/annual-financial-planning-checklist/annual-financial-planning-checklist.component';
import { HowQualifiedCharitableDonationsCanLowerYourTaxesComponent } from './finances/how-qualified-charitable-donations-can-lower-your-taxes/how-qualified-charitable-donations-can-lower-your-taxes.component';
import { TaxEfficientInvestmentStrategiesComponent } from './finances/tax-efficient-investment-strategies/annual-financial-planning-checklist.component';
import { LendingMoneyToFamilyOrFriendsComponent } from './finances/lending-money-to-family-or-friends/lending-money-to-family-or-friends.component';
import { IdentityTheft10WaysComponent } from './finances/identity-theft-10-ways/identity-theft-10-ways.component';
import { GeneralHealthAndLifestyleComponent } from './general-health-and-lifestyle/general-health-and-lifestyle.component';
import { FiveSneakyCausesOfWeightGainComponent } from './general-health-and-lifestyle/five-sneaky-causes-of-weight-gain/five-sneaky-causes-of-weight-gain.component';
import { SimpleStepsToPreventFallsComponent } from './general-health-and-lifestyle/simple-steps-to-prevent-falls/simple-steps-to-prevent-falls.component';
import { SevenSimpleStepsToMakeAHealthyChangeComponent } from './general-health-and-lifestyle/seven-simple-steps-to-make-a-healthy-change/seven-simple-steps-to-make-a-healthy-change.component';
import { LivingHealthyTo100Component } from './general-health-and-lifestyle/living-healthy-to-100/living-healthy-to-100.component';
import { BattlingDangerousBellyFatComponent } from './general-health-and-lifestyle/battling-dangerous-belly-fat/battling-dangerous-belly-fat.component';
import { BoostYourDigestionComponent } from './general-health-and-lifestyle/boost-your-digestion/boost-your-digestion.component';
import { SeasonalAllergiesReliefFromWheezingAndSneezingComponent } from './general-health-and-lifestyle/seasonal-allergies-relief-from-wheezing-and-sneezing/seasonal-allergies-relief-from-wheezing-and-sneezing.component';
import { SimpleStepsToBoostYourImmuneSystemComponent } from './general-health-and-lifestyle/simple-steps-to-boost-your-immune-system/simple-steps-to-boost-your-immune-system.component';
import { TenTipsToBoostYourEnergyComponent } from './general-health-and-lifestyle/ten-tips-to-boost-your-energy/ten-tips-to-boost-your-energy.component';
import { TopTenPositiveBehaviorsThatCanImproveYourHealthAndReduceYourRiskOfDiseaseComponent } from './general-health-and-lifestyle/top-10-positive-behaviors-that-can-improve-your-health-and-reduce-your-risk-of-disease/top-10-positive-behaviors-that-can-improve-your-health-and-reduce-your-risk-of-disease.component';
import { HearingAidsDoMoreThanHelpYouHearComponent } from './general-health-and-lifestyle/hearing-aids-do-more-than-help-you-hear/hearing-aids-do-more-than-help-you-hear.component';
import { SavingYourLifeWithSunscreenComponent } from './general-health-and-lifestyle/saving-your-life-with-sunscreen/saving-your-life-with-sunscreen.component';
import { MedicalComponent } from './medical/medical.component';
import { DealingWithDiabetesComponent } from './medical/dealing-with-diabetes/dealing-with-diabetes.component';
import { DealingWithCancerComponent } from './medical/dealing-with-cancer/dealing-with-cancer.component';
import { UniqueHealthcareAspectsAmongAsianAmericansComponent } from './medical/unique-healthcare-aspects-among-asian-americans/unique-healthcare-aspects-among-asian-americans.component';
import { UniqueHealthcareAspectsAmongAfricanAmericansComponent } from './medical/unique-healthcare-aspects-among-african-americans/unique-healthcare-aspects-among-african-americans.component';
import { UniqueHealthcareAspectsAmongLatinosComponent } from './medical/unique-healthcare-aspects-among-latinos/unique-healthcare-aspects-among-latinos.component';
import { UniqueHealthcareAspectsAmongEuropeansComponent } from './medical/unique-healthcare-aspects-among-europeans/unique-healthcare-aspects-among-europeans.component';
import { UniqueHealthcareAspectsAmongMiddleEasternAmericansComponent } from './medical/unique-healthcare-aspects-among-middle-eastern-americans/unique-healthcare-aspects-among-middle-eastern-americans.component';

import { ResourcesOnHomelessnessComponent } from './resources-on-homelessness/resources-on-homelessness.component';
import { WhyHomelessnessIsSoPervasiveComponent } from './resources-on-homelessness/why-homelessness-is-so-pervasive/why-homelessness-is-so-pervasive.component';
import { WhereToGoForHousingAssistanceComponent } from './resources-on-homelessness/where-to-go-for-housing-assistance/where-to-go-for-housing-assistance.component';
import { TheSocialIndicatorsThatIncreaseRiskOfHomelessnessComponent } from './resources-on-homelessness/the-social-indicators-that-increase-risk-of-homelessness/the-social-indicators-that-increase-risk-of-homelessness.component';
import { NutritionComponent } from './nutrition/nutrition.component'
import { SneakySodiumWhereAreYouHidingComponent } from './nutrition/sneaky-sodium-where-are-you-hiding/sneaky-sodium-where-are-you-hiding.component';
import { TestYourNutritionIqComponent } from './nutrition/test-your-nutrition-iq/test-your-nutrition-iq.component';
import { GoodFoodsForYourGutComponent } from './nutrition/good-foods-for-your-gut/good-foods-for-your-gut.component';
import { GoodFatsBadFatsComponent } from './nutrition/good-fats-bad-fats/good-fats-bad-fats.component';
import { EatingHealthyWhenEatingOutComponent } from './nutrition/eating-healthy-when-eating-out/eating-healthy-when-eating-out.component';
import { FruitsAndVegetablesColorYourselfHealthyComponent } from './nutrition/fruits-and-vegetables-color-yourself-healthy/fruits-and-vegetables-color-yourself-healthy.component';
import { HealthyEatingToControlCholesterolComponent } from './nutrition/healthy-eating-to-control-cholesterol/healthy-eating-to-control-cholesterol.component';
import { TheShakedownOnSugarComponent } from './nutrition/the-shakedown-on-sugar/the-shakedown-on-sugar.component';
import { GetSmartAboutFoodLabelsComponent } from './nutrition/get-smart-about-food-labels/get-smart-about-food-labels.component';
import { SuperfoodsComponent } from './nutrition/superfoods/superfoods.component';
import { StretchYourGroceryDollarsComponent } from './nutrition/stretch-your-grocery-dollars/stretch-your-grocery-dollars.component';
import { TheTruthAboutCarbsComponent } from './nutrition/the-truth-about-carbs/the-truth-about-carbs.component';
import { OrganicFoodsToBuyOrNotToBuyComponent } from './nutrition/organic-foods-to-buy-or-not-to-buy/organic-foods-to-buy-or-not-to-buy.component';
import { HowNutritionChangesAsYouAgeComponent } from './nutrition/how-nutrition-changes-as-you-age/how-nutrition-changes-as-you-age.component';
import { IsYourPlateHeartHealthyComponent } from './nutrition/is-your-plate-heart-healthy/is-your-plate-heart-healthy.component';
import { ProteinAreYouGettingEnoughComponent } from './nutrition/protein-are-you-getting-enough/protein-are-you-getting-enough.component';
import { CookingForOneComponent } from './nutrition/cooking-for-one/cooking-for-one.component';
import { FoodsToBoostYourBrainPowerComponent } from './nutrition/foods-to-boost-your-brain-power/foods-to-boost-your-brain-power.component';
import { RateYourPlateComponent } from './nutrition/rate-your-plate/rate-your-plate.component';
import { CleanEatingDitchTheProcessedFoodComponent } from './nutrition/clean-eating-ditch-the-processed-food/clean-eating-ditch-the-processed-food.component';
import { NutritionInThe21stCenturyComponent } from './nutrition/nutrition-in-the-21st-century/nutrition-in-the-21st-century.component';
import { AreNaturalFlavorsReallyNaturalComponent } from './nutrition/are-natural-flavors-really-natural/are-natural-flavors-really-natural.component';
import { BannedInEuropeButNotInTheUsComponent } from './nutrition/banned-in-europe-but-not-in-the-us/banned-in-europe-but-not-in-the-us.component';

import { RetirementPlanningComponent } from './retirement-planning/retirement-planning.component';

import { EightStepsToPrepareForRetirementComponent } from './retirement-planning/eight-steps-to-prepare-for-retirement/eight-steps-to-prepare-for-retirement.component';
import { AvoidingRetirementDepressionComponent } from './retirement-planning/avoiding-retirement-depression/avoiding-retirement-depression.component';
import { TransitioningIntoRetirementComponent } from './retirement-planning/transitioning-into-retirement/transitioning-into-retirement.component';
import { ShouldYouPayOffYourHomeBeforeYouRetireComponent } from './retirement-planning/should-you-pay-off-your-home-before-you-retire/should-you-pay-off-your-home-before-you-retire.component';
import { WhenShouldYouRetireEarlyComponent } from './retirement-planning/when-should-you-retire-early/when-should-you-retire-early.component';
import { RetiringFromYour401kBeforeAge60Component } from './retirement-planning/retiring-from-your-401k-before-age-60/retiring-from-your-401k-before-age-60.component';
import { TestYourRetirementKnowledgeComponent } from './retirement-planning/test-your-retirement-knowledge/test-your-retirement-knowledge.component';
import { MaxingOutYour401kComponent } from './retirement-planning/maxing-out-your-401k/maxing-out-your-401k.component';
import { SelfEmployedIrasComponent } from './retirement-planning/self-employed-iras/self-employed-iras.component';
import { TheRightStrategyForRetirementWithdrawalsComponent } from './retirement-planning/the-right-strategy-for-retirement-withdrawals/the-right-strategy-for-retirement-withdrawals.component';
import { WhenShouldYouTakeSocialSecurityComponent } from './retirement-planning/when-should-you-take-social-security/when-should-you-take-social-security.component';
import { MaximizingSocialSecurityBenefitsComponent } from './retirement-planning/maximizing-social-security-benefits/maximizing-social-security-benefits.component';
import { TheSocialSecurityTrustFundComponent } from './retirement-planning/the-social-security-trust-fund/the-social-security-trust-fund.component';
import { HowToSpendWiselyInRetirementComponent } from './retirement-planning/how-to-spend-wisely-in-retirement/how-to-spend-wisely-in-retirement.component';
import { TheInflationProtectionBenefitsOfDeferredSocialSecurityComponent } from './retirement-planning/the-inflation-protection-benefits-of-deferred-social-security/the-inflation-protection-benefits-of-deferred-social-security.component';
import { PlanningForRetirementAsACaregiverComponent } from './retirement-planning/planning-for-retirement-as-a-caregiver/planning-for-retirement-as-a-caregiver.component';
import { TerminologyTrustsComponent } from './retirement-planning/terminology-trusts/terminology-trusts.component';
import { TwelveRetirementPlanningQuestionsToConsiderComponent } from './retirement-planning/twelve-retirement-planning-questions-to-consider/twelve-retirement-planning-questions-to-consider.component';
import { WhatIsABackdoorRothIraComponent } from './retirement-planning/what-is-a-backdoor-roth-ira/what-is-a-backdoor-roth-ira.component';
import { InheritanceRightsForSpousesTrustsVsLeavingEverythingDirectlyComponent } from './retirement-planning/inheritance-rights-for-spouses-trusts-vs-leaving-everything-directly/inheritance-rights-for-spouses-trusts-vs-leaving-everything-directly.component';
import { StayActiveDuringRetirementComponent } from './retirement-planning/stay-active-during-retirement/stay-active-during-retirement.component';
import { Top10RetirementMythsComponent } from './retirement-planning/top-10-retirement-myths/top-10-retirement-myths.component';
import { StayingTechSavvyDuringRetirementComponent } from './retirement-planning/staying-tech-savvy-during-retirement/staying-tech-savvy-during-retirement.component';
import { TheProsAndConsOfReverseMortgagesComponent } from './retirement-planning/the-pros-and-cons-of-reverse-mortgages/the-pros-and-cons-of-reverse-mortgages.component';
import { TheFourPercentRuleForRetirementWithdrawalsComponent } from './retirement-planning/the-four-percent-rule-for-retirement-withdrawals/the-four-percent-rule-for-retirement-withdrawals.component';

import { SocialProblemsComponent } from './social-problems/social-problems.component';
import { SolvingLonelinessInHealthcareComponent } from './social-problems/solving-loneliness-in-healthcare/solving-loneliness-in-healthcare.component';
import { DealingWithIsolationComponent } from './social-problems/dealing-with-isolation/dealing-with-isolation.component';
import { IsTheWorldGettingWorseComponent } from './social-problems/is-the-world-getting-worse/is-the-world-getting-worse.component';
import { SocialMediaLiteracy101Component } from './social-problems/social-media-literacy-101/social-media-literacy-101.component';
import { Addiction101Component } from './social-problems/addiction-101/addiction-101.component';
import { Addiction102Component } from './social-problems/addiction-102/addiction-102.component';
import { Addiction103Component } from './social-problems/addiction-103/addiction-103.component';
import { Addiction104Component } from './social-problems/addiction-104/addiction-104.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'article', component: ArticleOverviewComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'for-patients', component: ForPatientsComponent },
  { path: 'for-patients/medical-industry-overview', component: MedicalIndustryOverviewComponent },
  { path: 'for-patients/medicare', component: MedicareComponent },
  { path: 'for-patients/medicaid', component: MedicaidComponent },
  { path: 'insurance-options/medicare', component: MedicareInsuranceComponent },
  { path: 'for-patients/individual-family-health-insurance', component: IndividualFamilyHealthInsuranceComponent },
  { path: 'for-patients/survey', component: SurveyFormComponent },
  { path: 'for-providers', component: ForProvidersComponent },
  { path: 'for-providers/doctors', component: DoctorsComponent },
  { path: 'for-providers/pharmacists', component: PharmacistsComponent },
  { path: 'for-providers/medical-groups', component: MedicalGroupsComponent },
  { path: 'healthcare-resources/medical-terms', component: MedicalGlossaryComponent },
  { path: 'for-providers/news', component: NewsComponent },
  { path: 'about-us', component: AboutMeComponent },
  { path: 'about-us/about-healthcare-helpers', component: AboutHealthcareHelpersComponent },
  { path: 'about-us/our-philosophy', component: MyPhilosophyComponent },
  { path: 'about-us/feedback', component: FeedbackComponent },
  { path: 'about-us/contact-us', component: ContactMeComponent },
  { path: 'insurance-options', component: InsuranceOptionsComponent },
  { path: 'insurance-options/medicare-insurance', component: MedicareInsuranceComponent },
  { path: 'insurance-options/individual-and-family-plans', component: IndividualAndFamilyPlansComponent },
  { path: 'insurance-options/life-insurance', component: LifeInsuranceComponent },
  { path: 'insurance-options/annuities', component: AnnuitiesComponent },
  { path: 'insurance-options/long-term-care', component: LongTermCareComponent },
  { path: 'insurance-options/dental-vision', component: DentalVisionComponent },
  { path: 'insurance-options/other-insurance', component: AccidentCancerDisabilityComponent },
  { path: 'planning-your-retirement', component: PlanningYourRetirementComponent },
  { path: 'planning-your-retirement/turning-65', component: Turning65Component },
  { path: 'planning-your-retirement/planning-your-retirement-summary', component: PlanningYourRetirementSummeryComponent },
  { path: 'planning-your-retirement/still-working', component: StillWorkingComponent },
  { path: 'planning-your-retirement/taxes-in-retirement', component: TaxesInRetirement },
  { path: 'planning-your-retirement/other-forms-of-healthcare', component: OtherFormsOfHealthcareComponent },
  { path: 'planning-your-retirement/how-to-maximize-social-security', component: HowToMaximizeSocialSecurityComponent },
  { path: 'planning-your-retirement/who-will-take-care-of-you', component: WhoWillTakeCareOfYouComponent },
  { path: 'planning-your-retirement/preparing-your-estate', component: PreparingYourEstateComponent },
  { path: 'healthcare-resources', component: HealthcareResourcesComponent },
  { path: 'resources/resource-library', component: ResourceLibraryComponent },
  { path: 'healthcare-resources/training-events-videos-webinars', component: TrainingEventsVideosWebinarsComponent },
  // { path: 'healthcare-resources/medical-terms', component: MedicalTermsComponent },
  { path: 'healthcare-resources/healthcare-terms', component: HealthcareTermsComponent },
  { path: 'healthcare-resources/life-insurance-terms', component: LifeInsuranceTermsComponent },
  { path: 'healthcare-resources/medicare-calculators', component: MedicareCalculatorsComponent },
  {
    path: 'mental-health',
    component: MentalHealthComponent,
    children: [
      { path: '', redirectTo: 'making-the-most-of-your-therapy-appointments', pathMatch: 'full' },

      { path: 'making-the-most-of-your-therapy-appointments', component: MakingTheMostOfYourTherapyAppointmentsComponent },
      { path: 'how-to-develop-resilience-when-you-are-experiencing-health-issues', component: HowToDevelopResilienceWhenYouAreExperiencingHealthIssuesComponent },
      { path: '5-best-ways-to-manage-anxiety', component: FiveBestWaysToManageAnxietyComponent },
      { path: 'simple-ways-to-manage-your-mental-health', component: SimpleWaysToManageYourMentalHealthComponent },
      { path: 'the-benefits-of-breathing', component: TheBenefitsOfBreathingComponent },
      { path: 'the-positive-role-of-stress-in-your-life', component: ThePositiveRoleOfStressInYourLifeComponent },
      { path: 'the-importance-of-sleep', component: TheImportanceOfSleepComponent },
      { path: 'trauma-101', component: Trauma101Component },
      { path: 'trauma-102', component: Trauma102Component },
      { path: 'advancements-in-preventing-and-managing-cognitive-decline', component: AdvancementsInPreventingAndManagingCognitiveDeclineComponent },
      { path: 'testing-for-cognitive-decline', component: TestingForCognitiveDeclineComponent }
    ]
  },
  {
    path: 'technology', component: TechnologyComponent, children: [
      { path: 'protect-yourself-from-scams', component: ProtectYourselfFromScamsComponent },
      { path: 'how-seniors-can-protect-themselves-from-ai-scams', component: HowSeniorsCanProtectThemselvesFromAiScamsComponent },
      { path: 'genomic-mapping-and-the-future-of-healthcare', component: GenomicMappingAndTheFutureOfHealthcareComponent },
      { path: 'how-to-make-telehealth-work', component: HowToMakeTelehealthWorkComponent },
      { path: 'ai-telehealth', component: AiTelehealthComponent },
      { path: 'understanding-social-media-pitfalls-and-promises', component: UnderstandingSocialMediaPitfallsAndPromisesComponent },
      { path: 'how-technology-has-become-a-part-of-your-healthcare', component: HowTechnologyHasBecomeAPartOfYourHealthcareComponent }
    ]
  },
  {
    path: 'healthcare', component: HealthcareComponent, children: [
      { path: 'how-to-choose-a-doctor', component: HowToChooseADoctorComponent },
      { path: 'how-to-make-the-most-out-of-your-doctor-visits', component: HowToMakeTheMostOutOfYourDoctorVisitsComponent },
      { path: 'how-to-process-your-doctor-visits', component: HowToProcessYourDoctorVisitsComponent },
      { path: 'what-to-do-when-you-receive-a-diagnosis', component: WhatToDoWhenYouReceiveADiagnosisComponent },
      { path: 'how-to-minimize-confusion-and-uncertainty-after-your-doctor-visits', component: HowToMinimizeConfusionAndUncertaintyAfterYourDoctorVisitsComponent },
      { path: 'building-your-personal-healthcare-team', component: BuildingYourPersonalHealthcareTeamComponent },
      { path: 'why-you-should-see-your-doctor-even-if-you-are-healthy', component: WhyYouShouldSeeYourDoctorEvenIfYouAreHealthyComponent },
      { path: 'preparing-for-surgery', component: PreparingForSurgeryComponent },
      { path: 'what-your-doctor-thinks-about-when-giving-you-a-diagnosis', component: WhatYourDoctorThinksAboutWhenGivingYouADiagnosisComponent }
    ]
  },
  {
    path: 'caregiver-resources', component: CaregiverResourcesComponent, children: [
      { path: 'caregiver-survival-tips', component: CaregiverSurvivalTipsComponent },
      { path: 'five-steps-for-advance-care-planning', component: FiveStepsForAdvanceCarePlanningComponent },
      { path: 'housing-options-for-older-adults', component: HousingOptionsForOlderAdultsComponent },
      { path: 'long-term-care-planning', component: LongTermCarePlanningComponent }
    ]
  },
  {
    path: 'retirement-planning',
    component: RetirementPlanningComponent,
    children: [
      { path: '', redirectTo: 'eight-steps-to-prepare-for-retirement', pathMatch: 'full' },

      { path: 'eight-steps-to-prepare-for-retirement', component: EightStepsToPrepareForRetirementComponent },
      { path: 'avoiding-retirement-depression', component: AvoidingRetirementDepressionComponent },
      { path: 'transitioning-into-retirement', component: TransitioningIntoRetirementComponent },
      { path: 'should-you-pay-off-your-home-before-you-retire', component: ShouldYouPayOffYourHomeBeforeYouRetireComponent },
      { path: 'when-should-you-retire-early', component: WhenShouldYouRetireEarlyComponent },
      { path: 'retiring-from-your-401k-before-age-60', component: RetiringFromYour401kBeforeAge60Component },
      { path: 'test-your-retirement-knowledge', component: TestYourRetirementKnowledgeComponent },
      { path: 'maxing-out-your-401k', component: MaxingOutYour401kComponent },
      { path: 'self-employed-iras', component: SelfEmployedIrasComponent },
      { path: 'the-right-strategy-for-retirement-withdrawals', component: TheRightStrategyForRetirementWithdrawalsComponent },
      { path: 'when-should-you-take-social-security', component: WhenShouldYouTakeSocialSecurityComponent },
      { path: 'maximizing-social-security-benefits', component: MaximizingSocialSecurityBenefitsComponent },
      { path: 'the-social-security-trust-fund', component: TheSocialSecurityTrustFundComponent },
      { path: 'how-to-spend-wisely-in-retirement', component: HowToSpendWiselyInRetirementComponent },
      { path: 'the-inflation-protection-benefits-of-deferred-social-security', component: TheInflationProtectionBenefitsOfDeferredSocialSecurityComponent },
      { path: 'planning-for-retirement-as-a-caregiver', component: PlanningForRetirementAsACaregiverComponent },
      { path: 'terminology-trusts', component: TerminologyTrustsComponent },
      { path: 'twelve-retirement-planning-questions-to-consider', component: TwelveRetirementPlanningQuestionsToConsiderComponent },
      { path: 'what-is-a-backdoor-roth-ira', component: WhatIsABackdoorRothIraComponent },
      { path: 'inheritance-rights-for-spouses-trusts-vs-leaving-everything-directly', component: InheritanceRightsForSpousesTrustsVsLeavingEverythingDirectlyComponent },
      { path: 'stay-active-during-retirement', component: StayActiveDuringRetirementComponent },
      { path: 'top-10-retirement-myths', component: Top10RetirementMythsComponent },
      { path: 'staying-tech-savvy-during-retirement', component: StayingTechSavvyDuringRetirementComponent },
      { path: 'the-pros-and-cons-of-reverse-mortgages', component: TheProsAndConsOfReverseMortgagesComponent },
      { path: 'the-four-percent-rule-for-retirement-withdrawals', component: TheFourPercentRuleForRetirementWithdrawalsComponent }
    ]
  },
  {
    path: 'end-of-life-planning', component: DeathAndEndOfLifePlanningComponent, children: [
      { path: '', redirectTo: 'dealing-with-terminal-illness', pathMatch: 'full' },

      { path: 'dealing-with-terminal-illness', component: DealingWithTerminalIllnessComponent },
      { path: 'how-to-pass-away-with-tranquility', component: HowToPassAwayWithTranquilityComponent },
      { path: 'dealing-with-resentment', component: DealingWithResentmentComponent },
      { path: 'planning-your-legacy', component: PlanningYourLegacyComponent },

      { path: 'the-elephant-in-the-room-why-are-americans-afraid-to-talk-about-death', component: TheElephantInTheRoomWhyAreAmericansAfraidToTalkAboutDeathComponent },
      { path: 'seven-types-of-insurance-policies-you-do-and-dont-need', component: SevenTypesOfInsurancePoliciesYouDoAndDontNeedComponent },
      { path: 'how-to-buy-a-life-insurance-policy-and-what-to-avoid', component: HowToBuyALifeInsurancePolicyAndWhatToAvoidComponent },
      { path: 'purchasing-a-life-insurance-policy', component: PurchasingALifeInsurancePolicyComponent },
      { path: 'when-to-buy-long-term-care-insurance', component: WhenToBuyLongTermCareInsuranceComponent },
      { path: 'is-long-term-care-insurance-worth-it', component: IsLongTermCareInsuranceWorthItComponent },
      { path: 'disability-insurance-benefits-can-help-protect-your-ability-to-earn', component: DisabilityInsuranceBenefitsCanHelpProtectYourAbilityToEarnComponent },
      { path: 'what-is-an-umbrella-insurance-policy', component: WhatIsAnUmbrellaInsurancePolicyComponent },
      { path: 'common-mistakes-in-creating-a-will', component: CommonMistakesInCreatingAWillComponent },
      { path: 'wills-trusts-taxes-and-inheritance-making-sense-of-everything', component: WillsTrustsTaxesAndInheritanceMakingSenseOfEverythingComponent }
    ]
  },
  {
    path: 'behavioral-habits', component: BehavioralHabitsComponent, children: [
      { path: 'habits-of-happy-people', component: HabitsOfHappyPeopleComponent },
      { path: 'the-power-of-positivity', component: ThePowerOfPositivityComponent },
      { path: 'aging-happily', component: AgingHappilyComponent },
      { path: 'boosting-your-mood-with-food-and-fitness', component: BoostingYourMoodWithFoodAndFitnessComponent },
      { path: 'staying-social', component: StayingSocialComponent },
      { path: 'decompress-from-stress', component: DecompressFromStressComponent },
      { path: 'partner-with-your-doctor', component: PartnerWithYourDoctorComponent },
      { path: 'disease-vs-dis-ease-what-it-means-to-heal', component: DiseaseVsDisEaseWhatItMeansToHealComponent }
    ]
  },
  {
    path: 'social-problems',
    component: SocialProblemsComponent,
    children: [
      {
        path: '',
        redirectTo: 'solving-loneliness-in-healthcare',
        pathMatch: 'full'
      },
      {
        path: 'solving-loneliness-in-healthcare',
        component: SolvingLonelinessInHealthcareComponent
      },
      {
        path: 'dealing-with-isolation',
        component: DealingWithIsolationComponent
      },
      {
        path: 'is-the-world-getting-worse',
        component: IsTheWorldGettingWorseComponent
      },
      {
        path: 'social-media-literacy-101',
        component: SocialMediaLiteracy101Component
      },
      {
        path: 'addiction-101',
        component: Addiction101Component
      },
      {
        path: 'addiction-102',
        component: Addiction102Component
      },
      {
        path: 'addiction-103',
        component: Addiction103Component
      },
      {
        path: 'addiction-104',
        component: Addiction104Component
      }
    ]
  },
  {
    path: 'the-brain',
    component: TheBrainComponent,
    children: [
      { path: '', redirectTo: 'how-the-brain-works-part-1', pathMatch: 'full' },

      { path: 'how-the-brain-works-part-1', component: HowTheBrainWorksPart1Component },
      { path: 'how-the-brain-works-part-2', component: HowTheBrainWorksPart2Component },
      { path: 'how-the-brain-works-part-3', component: HowTheBrainWorksPart3Component },

      { path: 'diving-into-alzheimers', component: DivingIntoAlzheimersComponent },
      { path: 'diving-into-dementia', component: DivingIntoDementiaComponent },
      { path: 'diving-into-parkinsons', component: DivingIntoParkinsonsComponent },

      { path: 'a-healthy-brain', component: AHealthyBrainComponent },
      { path: 'headaches-decoded', component: HeadachesDecodedComponent },
      { path: 'battling-the-aging-brain', component: BattlingTheAgingBrainComponent },
      { path: 'give-your-brain-a-boost', component: GiveYourBrainABoostComponent },
      { path: 'the-autistic-mind', component: TheAutisticMindComponent }
    ]
  },
  {
    path: 'disease',
    component: DiseaseComponent,
    children: [
      { path: '', redirectTo: 'the-history-of-disease-part-1-how-we-see-it', pathMatch: 'full' },

      { path: 'the-history-of-disease-part-1-how-we-see-it', component: TheHistoryOfDiseasePart1HowWeSeeItComponent },
      { path: 'the-history-of-disease-part-2-how-diseases-evolved-and-spread', component: TheHistoryOfDiseasePart2HowDiseasesEvolvedAndSpreadComponent },

      { path: 'modern-day-diseases-different-generations-different-health-problems', component: ModernDayDiseasesDifferentGenerationsDifferentHealthProblemsComponent },
      { path: 'modern-day-disease-management', component: ModernDayDiseaseManagementComponent },

      { path: 'the-history-of-vaccines', component: TheHistoryOfVaccinesComponent },
      { path: 'how-vaccines-work', component: HowVaccinesWorkComponent },
      { path: 'how-the-covid-vaccine-works', component: HowTheCovidVaccineWorksComponent },

      { path: 'top-10-diseases-and-their-risk-factors', component: Top10DiseasesAndTheirRiskFactorsComponent }
    ]
  },

  {
    path: 'vaccines', component: VaccinesComponent, children: [
      { path: 'overview', component: VaccinesOverviewComponent },
      { path: 'the-history-of-vaccines', component: TheHistoryOfVaccinesComponent },
      { path: 'how-vaccines-stop-disease-from-spreading', component: HowVaccinesStopDiseaseFromSpreadingComponent },
      { path: 'how-the-covid-vaccine-works', component: HowTheCovidVaccineWorksComponent }
    ]
  },
  {
    path: 'resources-on-homelessness',
    component: ResourcesOnHomelessnessComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'why-homelessness-is-so-pervasive' },
      { path: 'why-homelessness-is-so-pervasive', component: WhyHomelessnessIsSoPervasiveComponent },
      { path: 'where-to-go-for-housing-assistance', component: WhereToGoForHousingAssistanceComponent },
      { path: 'the-social-indicators-that-increase-risk-of-homelessness', component: TheSocialIndicatorsThatIncreaseRiskOfHomelessnessComponent }
    ]
  },
  {
    path: 'general-health-lifestyle',
    component: GeneralHealthAndLifestyleComponent,
    children: [
      { path: '', redirectTo: 'five-sneaky-causes-of-weight-gain', pathMatch: 'full' },
      { path: 'five-sneaky-causes-of-weight-gain', component: FiveSneakyCausesOfWeightGainComponent },
      { path: 'simple-steps-to-prevent-falls', component: SimpleStepsToPreventFallsComponent },
      { path: 'seven-simple-steps-to-make-a-healthy-change', component: SevenSimpleStepsToMakeAHealthyChangeComponent },
      { path: 'living-healthy-to-100', component: LivingHealthyTo100Component },
      { path: 'battling-dangerous-belly-fat', component: BattlingDangerousBellyFatComponent },
      { path: 'boost-your-digestion', component: BoostYourDigestionComponent },
      { path: 'seasonal-allergies-relief-from-wheezing-and-sneezing', component: SeasonalAllergiesReliefFromWheezingAndSneezingComponent },
      { path: 'simple-steps-to-boost-your-immune-system', component: SimpleStepsToBoostYourImmuneSystemComponent },
      { path: 'ten-tips-to-boost-your-energy', component: TenTipsToBoostYourEnergyComponent },
      { path: 'top-10-positive-behaviors-that-can-improve-your-health-and-reduce-your-risk-of-disease', component: TopTenPositiveBehaviorsThatCanImproveYourHealthAndReduceYourRiskOfDiseaseComponent },
      { path: 'hearing-aids-do-more-than-help-you-hear', component: HearingAidsDoMoreThanHelpYouHearComponent },
      { path: 'saving-your-life-with-sunscreen', component: SavingYourLifeWithSunscreenComponent }
    ]
  },
  {
    path: 'nutrition',
    component: NutritionComponent,
    children: [
      { path: '', redirectTo: 'sneaky-sodium-where-are-you-hiding', pathMatch: 'full' },

      { path: 'sneaky-sodium-where-are-you-hiding', component: SneakySodiumWhereAreYouHidingComponent },
      { path: 'test-your-nutrition-iq', component: TestYourNutritionIqComponent },
      { path: 'good-foods-for-your-gut', component: GoodFoodsForYourGutComponent },
      { path: 'good-fats-bad-fats', component: GoodFatsBadFatsComponent },
      { path: 'eating-healthy-when-eating-out', component: EatingHealthyWhenEatingOutComponent },
      { path: 'fruits-and-vegetables-color-yourself-healthy', component: FruitsAndVegetablesColorYourselfHealthyComponent },
      { path: 'healthy-eating-to-control-cholesterol', component: HealthyEatingToControlCholesterolComponent },
      { path: 'the-shakedown-on-sugar', component: TheShakedownOnSugarComponent },
      { path: 'get-smart-about-food-labels', component: GetSmartAboutFoodLabelsComponent },
      { path: 'superfoods', component: SuperfoodsComponent },
      { path: 'stretch-your-grocery-dollars', component: StretchYourGroceryDollarsComponent },
      { path: 'the-truth-about-carbs', component: TheTruthAboutCarbsComponent },
      { path: 'organic-foods-to-buy-or-not-to-buy', component: OrganicFoodsToBuyOrNotToBuyComponent },
      { path: 'how-nutrition-changes-as-you-age', component: HowNutritionChangesAsYouAgeComponent },
      { path: 'is-your-plate-heart-healthy', component: IsYourPlateHeartHealthyComponent },
      { path: 'protein-are-you-getting-enough', component: ProteinAreYouGettingEnoughComponent },
      { path: 'cooking-for-one', component: CookingForOneComponent },
      { path: 'foods-to-boost-your-brain-power', component: FoodsToBoostYourBrainPowerComponent },
      { path: 'rate-your-plate', component: RateYourPlateComponent },
      { path: 'clean-eating-ditch-the-processed-food', component: CleanEatingDitchTheProcessedFoodComponent },
      { path: 'nutrition-in-the-21st-century', component: NutritionInThe21stCenturyComponent },
      { path: 'are-natural-flavors-really-natural', component: AreNaturalFlavorsReallyNaturalComponent },
      { path: 'banned-in-europe-but-not-in-the-us', component: BannedInEuropeButNotInTheUsComponent }
    ]
  },
  {
    path: 'medicare', component: MedicareArticleComponent, children: [
      { path: 'overview', component: MedicareOverviewComponent },
      { path: 'how-to-choose-a-plan', component: HowToChooseAPlanComponent },
      { path: 'how-to-work-with-a-pharmacist', component: HowToWorkWithAPharmacistComponent }
    ]
  },
  {
    path: 'exercise',
    component: ExerciseComponent,
    children: [
      { path: '', redirectTo: 'basics-of-exercise', pathMatch: 'full' },
      { path: 'basics-of-exercise', component: BasicsOfExerciseComponent },
      { path: 'age-appropriate-exercise', component: AgeAppropriateExerciseComponent },
      { path: 'staying-strong-as-you-age', component: StayingStrongAsYouAgeComponent }
    ]
  },
  {
    path: 'finances',
    component: FinancesComponent,
    children: [
      { path: '', redirectTo: 'financial-literacy-101', pathMatch: 'full' },

      { path: 'financial-literacy-101', component: FinancialLiteracy101Component },
      { path: 'are-529-contributions-tax-deductible', component: Are529ContributionsTaxDeductibleComponent },
      { path: 'irs-rules-for-caregivers', component: IrsRulesForCaregiversComponent },
      { path: 'top-10-retirement-myths', component: Top10RetirementMythsComponent },
      { path: 'capitalize-on-tax-opportunities', component: CapitalizeOnTaxOpportunitiesComponent },
      { path: 'making-sense-of-roth-conversions', component: MakingSenseOfRothConversionsComponent },
      { path: 'annual-financial-planning-checklist', component: AnnualFinancialPlanningChecklistComponent },
      { path: 'how-qualified-charitable-donations-can-lower-your-taxes', component: HowQualifiedCharitableDonationsCanLowerYourTaxesComponent },
      { path: 'tax-efficient-investment-strategies', component: TaxEfficientInvestmentStrategiesComponent },
      { path: 'lending-money-to-family-or-friends', component: LendingMoneyToFamilyOrFriendsComponent },
      { path: 'identity-theft-10-ways', component: IdentityTheft10WaysComponent }
    ]
  },
  {
    path: 'medical',
    component: MedicalComponent,
    children: [
      { path: '', redirectTo: 'dealing-with-diabetes', pathMatch: 'full' },

      { path: 'dealing-with-diabetes', component: DealingWithDiabetesComponent },
      { path: 'dealing-with-cancer', component: DealingWithCancerComponent },
      { path: 'unique-healthcare-aspects-among-asian-americans', component: UniqueHealthcareAspectsAmongAsianAmericansComponent },
      { path: 'unique-healthcare-aspects-among-african-americans', component: UniqueHealthcareAspectsAmongAfricanAmericansComponent },
      { path: 'unique-healthcare-aspects-among-latinos', component: UniqueHealthcareAspectsAmongLatinosComponent },
      { path: 'unique-healthcare-aspects-among-europeans', component: UniqueHealthcareAspectsAmongEuropeansComponent },
      { path: 'unique-healthcare-aspects-among-middle-eastern-americans', component: UniqueHealthcareAspectsAmongMiddleEasternAmericansComponent }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
