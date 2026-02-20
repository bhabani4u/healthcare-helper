import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'; // Import MatMenuModule
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
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
import { MedicalTermsComponent } from './medical-terms/medical-terms.component';
import { HealthcareTermsComponent } from './healthcare-terms/healthcare-terms.component';
import { LifeInsuranceTermsComponent } from './life-insurance-terms/life-insurance-terms.component';
import { ArticleOverviewComponent } from './article-overview/article-overview.component';
import { MedicareCalculatorsComponent } from './medicare-calculators/medicare-calculators.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

import { CaregiverSurvivalTipsComponent } from './caregiver-resources/caregiver-survival-tips/caregiver-survival-tips.component';
import { FiveStepsForAdvanceCarePlanningComponent } from './caregiver-resources/five-steps-for-advance-care-planning/five-steps-for-advance-care-planning.component';
import { HousingOptionsForOlderAdultsComponent } from './caregiver-resources/housing-options-for-older-adults/housing-options-for-older-adults.component';
import { LongTermCarePlanningComponent } from './caregiver-resources/long-term-care-planning/long-term-care-planning.component';
import { HowVaccinesStopDiseaseFromSpreadingComponent } from './vaccines/how-vaccines-stop-disease-from-spreading/how-vaccines-stop-disease-from-spreading.component';
import { MedicareArticleComponent } from './medicare/medicare-article/medicare-article.component';
import { HowToChooseAPlanComponent } from './medicare/how-to-choose-a-plan/how-to-choose-a-plan.component';
import { HowToWorkWithAPharmacistComponent } from './medicare/how-to-work-with-a-pharmacist/how-to-work-with-a-pharmacist.component';

import { VaccinesOverviewComponent } from './vaccines/vaccines-overview/vaccines-overview.component';
import { MedicareOverviewComponent } from './medicare/medicare-overview/medicare-overview.component';
import { CaregiverResourcesComponent } from './caregiver-resources/caregiver-resources.component';
import { VaccinesComponent } from './vaccines/vaccines.component';


import { MentalHealthComponent } from './mental-health/mental-health.component';

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
import { DiseaseComponent } from './disease/disease.component';
import { TheHistoryOfDiseasePart1HowWeSeeItComponent } from './disease/the-history-of-disease-part-1-how-we-see-it/the-history-of-disease-part-1-how-we-see-it.component';
import { TheHistoryOfDiseasePart2HowDiseasesEvolvedAndSpreadComponent } from './disease/the-history-of-disease-part-2-how-diseases-evolved-and-spread/the-history-of-disease-part-2-how-diseases-evolved-and-spread.component';
import { ModernDayDiseasesDifferentGenerationsDifferentHealthProblemsComponent } from './disease/modern-day-diseases-different-generations-different-health-problems/modern-day-diseases-different-generations-different-health-problems.component';
import { ModernDayDiseaseManagementComponent } from './disease/modern-day-disease-management/modern-day-disease-management.component';
import { TheHistoryOfVaccinesComponent } from './disease/the-history-of-vaccines/the-history-of-vaccines.component';
import { HowVaccinesWorkComponent } from './disease/how-vaccines-work/how-vaccines-work.component';
import { HowTheCovidVaccineWorksComponent } from './disease/how-the-covid-vaccine-works/how-the-covid-vaccine-works.component';
import { Top10DiseasesAndTheirRiskFactorsComponent } from './disease/top-10-diseases-and-their-risk-factors/top-10-diseases-and-their-risk-factors.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BasicsOfExerciseComponent } from './exercise/basics-of-exercise/basics-of-exercise.component';
import { AgeAppropriateExerciseComponent } from './exercise/age-appropriate-exercise/age-appropriate-exercise.component';
import { StayingStrongAsYouAgeComponent } from './exercise/staying-strong-as-you-age/staying-strong-as-you-age.component';


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

@NgModule({
  declarations: [
    SocialProblemsComponent,
    SolvingLonelinessInHealthcareComponent,
    DealingWithIsolationComponent,
    IsTheWorldGettingWorseComponent,
    SocialMediaLiteracy101Component,
    Addiction101Component,
    Addiction102Component,
    Addiction103Component,
    Addiction104Component,
    RetirementPlanningComponent,
    EightStepsToPrepareForRetirementComponent,
    AvoidingRetirementDepressionComponent,
    TransitioningIntoRetirementComponent,
    ShouldYouPayOffYourHomeBeforeYouRetireComponent,
    WhenShouldYouRetireEarlyComponent,
    RetiringFromYour401kBeforeAge60Component,
    TestYourRetirementKnowledgeComponent,
    MaxingOutYour401kComponent,
    SelfEmployedIrasComponent,
    TheRightStrategyForRetirementWithdrawalsComponent,
    WhenShouldYouTakeSocialSecurityComponent,
    MaximizingSocialSecurityBenefitsComponent,
    TheSocialSecurityTrustFundComponent,
    HowToSpendWiselyInRetirementComponent,
    TheInflationProtectionBenefitsOfDeferredSocialSecurityComponent,
    PlanningForRetirementAsACaregiverComponent,
    TerminologyTrustsComponent,
    TwelveRetirementPlanningQuestionsToConsiderComponent,
    WhatIsABackdoorRothIraComponent,
    InheritanceRightsForSpousesTrustsVsLeavingEverythingDirectlyComponent,
    StayActiveDuringRetirementComponent,
    Top10RetirementMythsComponent,
    StayingTechSavvyDuringRetirementComponent,
    TheProsAndConsOfReverseMortgagesComponent,
    TheFourPercentRuleForRetirementWithdrawalsComponent,
    NutritionComponent,
    SneakySodiumWhereAreYouHidingComponent,
    TestYourNutritionIqComponent,
    GoodFoodsForYourGutComponent,
    GoodFatsBadFatsComponent,
    EatingHealthyWhenEatingOutComponent,
    FruitsAndVegetablesColorYourselfHealthyComponent,
    HealthyEatingToControlCholesterolComponent,
    TheShakedownOnSugarComponent,
    GetSmartAboutFoodLabelsComponent,
    SuperfoodsComponent,
    StretchYourGroceryDollarsComponent,
    TheTruthAboutCarbsComponent,
    OrganicFoodsToBuyOrNotToBuyComponent,
    HowNutritionChangesAsYouAgeComponent,
    IsYourPlateHeartHealthyComponent,
    ProteinAreYouGettingEnoughComponent,
    CookingForOneComponent,
    FoodsToBoostYourBrainPowerComponent,
    RateYourPlateComponent,
    CleanEatingDitchTheProcessedFoodComponent,
    NutritionInThe21stCenturyComponent,
    AreNaturalFlavorsReallyNaturalComponent,
    BannedInEuropeButNotInTheUsComponent,
    ResourcesOnHomelessnessComponent,
    WhyHomelessnessIsSoPervasiveComponent,
    WhereToGoForHousingAssistanceComponent,
    TheSocialIndicatorsThatIncreaseRiskOfHomelessnessComponent,
    MedicalComponent,
    DealingWithDiabetesComponent,
    DealingWithCancerComponent,
    UniqueHealthcareAspectsAmongAsianAmericansComponent,
    UniqueHealthcareAspectsAmongAfricanAmericansComponent,
    UniqueHealthcareAspectsAmongLatinosComponent,
    UniqueHealthcareAspectsAmongEuropeansComponent,
    UniqueHealthcareAspectsAmongMiddleEasternAmericansComponent,
    GeneralHealthAndLifestyleComponent,
    FiveSneakyCausesOfWeightGainComponent,
    SimpleStepsToPreventFallsComponent,
    SevenSimpleStepsToMakeAHealthyChangeComponent,
    LivingHealthyTo100Component,
    BattlingDangerousBellyFatComponent,
    BoostYourDigestionComponent,
    SeasonalAllergiesReliefFromWheezingAndSneezingComponent,
    SimpleStepsToBoostYourImmuneSystemComponent,
    TenTipsToBoostYourEnergyComponent,
    TopTenPositiveBehaviorsThatCanImproveYourHealthAndReduceYourRiskOfDiseaseComponent,
    HearingAidsDoMoreThanHelpYouHearComponent,
    SavingYourLifeWithSunscreenComponent,
    FinancesComponent,
    FinancialLiteracy101Component,
    Are529ContributionsTaxDeductibleComponent,
    IrsRulesForCaregiversComponent,
    Top10RetirementMythsComponent,
    CapitalizeOnTaxOpportunitiesComponent,
    MakingSenseOfRothConversionsComponent,
    AnnualFinancialPlanningChecklistComponent,
    HowQualifiedCharitableDonationsCanLowerYourTaxesComponent,
    TaxEfficientInvestmentStrategiesComponent,
    LendingMoneyToFamilyOrFriendsComponent,
    IdentityTheft10WaysComponent,
    DeathAndEndOfLifePlanningComponent,
    DiseaseComponent,
    TheHistoryOfDiseasePart1HowWeSeeItComponent,
    TheHistoryOfDiseasePart2HowDiseasesEvolvedAndSpreadComponent,
    ModernDayDiseasesDifferentGenerationsDifferentHealthProblemsComponent,
    ModernDayDiseaseManagementComponent,
    TheHistoryOfVaccinesComponent,
    HowVaccinesWorkComponent,
    HowTheCovidVaccineWorksComponent,
    Top10DiseasesAndTheirRiskFactorsComponent,
    DealingWithTerminalIllnessComponent,
    HowToPassAwayWithTranquilityComponent,
    ExerciseComponent,
    BasicsOfExerciseComponent,
    AgeAppropriateExerciseComponent,
    StayingStrongAsYouAgeComponent,
    DealingWithResentmentComponent,
    PlanningYourLegacyComponent,

    TheElephantInTheRoomWhyAreAmericansAfraidToTalkAboutDeathComponent,
    SevenTypesOfInsurancePoliciesYouDoAndDontNeedComponent,
    HowToBuyALifeInsurancePolicyAndWhatToAvoidComponent,
    PurchasingALifeInsurancePolicyComponent,
    WhenToBuyLongTermCareInsuranceComponent,
    IsLongTermCareInsuranceWorthItComponent,
    DisabilityInsuranceBenefitsCanHelpProtectYourAbilityToEarnComponent,
    WhatIsAnUmbrellaInsurancePolicyComponent,
    CommonMistakesInCreatingAWillComponent,
    WillsTrustsTaxesAndInheritanceMakingSenseOfEverythingComponent,
    CaregiverResourcesComponent,
    SocialProblemsComponent,
    BehavioralHabitsComponent,
    HabitsOfHappyPeopleComponent,
    ThePowerOfPositivityComponent,
    AgingHappilyComponent,
    BoostingYourMoodWithFoodAndFitnessComponent,
    StayingSocialComponent,
    TheBrainComponent,

    HowTheBrainWorksPart1Component,
    HowTheBrainWorksPart2Component,
    HowTheBrainWorksPart3Component,

    DivingIntoAlzheimersComponent,
    DivingIntoDementiaComponent,
    DivingIntoParkinsonsComponent,

    AHealthyBrainComponent,
    HeadachesDecodedComponent,
    BattlingTheAgingBrainComponent,
    GiveYourBrainABoostComponent,
    TheAutisticMindComponent,
    DecompressFromStressComponent,
    PartnerWithYourDoctorComponent,
    DiseaseVsDisEaseWhatItMeansToHealComponent,
    DiseaseComponent,
    VaccinesComponent,
    AppComponent,
    LandingPageComponent,
    SurveyFormComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    ForPatientsComponent,
    ForProvidersComponent,
    AboutMeComponent,
    InsuranceOptionsComponent,
    PlanningYourRetirementComponent,
    HealthcareResourcesComponent,
    MedicalIndustryOverviewComponent,
    MedicareComponent,
    MedicareInsuranceComponent,
    MedicaidComponent,
    IndividualFamilyHealthInsuranceComponent,
    DoctorsComponent,
    PharmacistsComponent,
    MedicalGroupsComponent,
    NewsComponent,
    AboutHealthcareHelpersComponent,
    MyPhilosophyComponent,
    ContactMeComponent,
    FeedbackComponent,
    IndividualAndFamilyPlansComponent,
    LifeInsuranceComponent,
    AnnuitiesComponent,
    LongTermCareComponent,
    DentalVisionComponent,
    AccidentCancerDisabilityComponent,
    Turning65Component,
    PlanningYourRetirementSummeryComponent,
    StillWorkingComponent,
    TaxesInRetirement,
    OtherFormsOfHealthcareComponent,
    HowToMaximizeSocialSecurityComponent,
    WhoWillTakeCareOfYouComponent,
    PreparingYourEstateComponent,
    ResourceLibraryComponent,
    TrainingEventsVideosWebinarsComponent,
    MedicalTermsComponent,
    MedicalGlossaryComponent,
    HealthcareTermsComponent,
    LifeInsuranceTermsComponent,
    ArticleOverviewComponent,
    MedicareCalculatorsComponent,
    CaregiverSurvivalTipsComponent,
    FiveStepsForAdvanceCarePlanningComponent,
    HousingOptionsForOlderAdultsComponent,
    LongTermCarePlanningComponent,
    DealingWithIsolationComponent,
    IsTheWorldGettingWorseComponent,
    ModernDayDiseaseManagementComponent,
    TheHistoryOfVaccinesComponent,
    HowVaccinesStopDiseaseFromSpreadingComponent,
    HowTheCovidVaccineWorksComponent,
    HowToChooseAPlanComponent,
    MedicareArticleComponent,
    HowToWorkWithAPharmacistComponent,
    VaccinesOverviewComponent,
    MedicareOverviewComponent,
    MentalHealthComponent,
    MakingTheMostOfYourTherapyAppointmentsComponent,
    HowToDevelopResilienceWhenYouAreExperiencingHealthIssuesComponent,
    FiveBestWaysToManageAnxietyComponent,
    SimpleWaysToManageYourMentalHealthComponent,
    TheBenefitsOfBreathingComponent,
    ThePositiveRoleOfStressInYourLifeComponent,
    TheImportanceOfSleepComponent,
    Trauma101Component,
    Trauma102Component,
    AdvancementsInPreventingAndManagingCognitiveDeclineComponent,
    TestingForCognitiveDeclineComponent,
    TechnologyComponent,
    ProtectYourselfFromScamsComponent,
    HowSeniorsCanProtectThemselvesFromAiScamsComponent,
    GenomicMappingAndTheFutureOfHealthcareComponent,
    HowToMakeTelehealthWorkComponent,
    AiTelehealthComponent,
    UnderstandingSocialMediaPitfallsAndPromisesComponent,
    HowTechnologyHasBecomeAPartOfYourHealthcareComponent,
    HealthcareComponent,
    HowToChooseADoctorComponent,
    HowToMakeTheMostOutOfYourDoctorVisitsComponent,
    HowToProcessYourDoctorVisitsComponent,
    WhatToDoWhenYouReceiveADiagnosisComponent,
    HowToMinimizeConfusionAndUncertaintyAfterYourDoctorVisitsComponent,
    BuildingYourPersonalHealthcareTeamComponent,
    WhyYouShouldSeeYourDoctorEvenIfYouAreHealthyComponent,
    PreparingForSurgeryComponent,
    WhatYourDoctorThinksAboutWhenGivingYouADiagnosisComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CarouselModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatSnackBarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
