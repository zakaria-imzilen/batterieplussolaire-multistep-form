const stepsData = [
	{
		inputName: "address",
		question: "Votre adresse",
		inputType: "text",
	},
	{
		inputName: "bill",
		question: "Montant annuel de votre facture d'électricité ",
		inputType: "select",
		selectValues: [
			"Inférieur à 500 €",
			"500 à 1000 €",
			"1000 à 1500 €",
			"1500 à 2000 €",
			"Supérieur à 2500 €",
		],
	},
	{
		inputName: "areYou",
		question: "Êtes-vous",
		inputType: "select",
		selectValues: [
			"Propriétaire (Résidence principale)",
			"Propriétaire (Résidence secondaire)",
			"Locataire",
		],
	},
	{
		inputName: "type",
		question: "Quel type",
		inputType: "select",
		selectValues: ["Maison", "Appartemment"],
	},
	{
		inputName: "research",
		question: "Ou en êtes vous dans vos recherches d'installation solaire",
		inputType: "select",
		selectValues: [
			"J'ai déjà reçu un devis",
			"Je commence mes recherches",
			"Je souhaite améliorer une installation existante",
		],
	},
	{
		inputName: "goal",
		question: "Votre objectif",
		inputType: "select",
		selectValues: [
			"Réduire ma facture d'électricité de 30% à 50%",
			"Réduire ma facture d'électricité de 50% à 70%",
			"Réduire ma facture d'électricité de plus de 70%",
			"Juste de la curiosité",
		],
	},
	{
		inputName: "chauffage",
		question: "Type de chauffage",
		inputType: "select",
		selectValues: [
			"Gaz",
			"Fioul",
			"Pompe à chaleur Air/Air (Climatisation)",
			"Pompe à chaleur Air/Eau (Chauffage au sol, radiateur haute et moyenne température)",
			"Radiateur électrique",
			"Bois /Granulé",
		],
	},
	{
		inputName: "production",
		question: "Votre production d'eau chaude",
		inputType: "select",
		selectValues: [
			"Chauffe-eau électrique",
			"Ballon thermodynamique",
			"Ballon solaire",
			"Pompe à chaleur",
			"Autre",
		],
	},
	{
		inputName: "age",
		question: "Votre tranche d'âge",
		inputType: "select",
		selectValues: [
			"Moins de 35 ans",
			"35 - 50 ans",
			"51 - 65 ans",
			"Plus de 65 ans",
		],
	},
	{
		inputName: "people",
		question: "Nombre de personnes dans le foyer",
		inputType: "select",
		selectValues: ["1", "2", "3", "4", "5", "+"],
	},
	{
		inputName: "reserve",
		question: "Reserve fiscal",
		inputType: "select",
		selectValues: [
			"Inférieur à 22500 €",
			"Entre 22500 et 35000 €",
			"Entre 35000 et 50000 €",
			"Supérieur à 50000 €",
		],
	},
	{
		inputName: "duration",
		question: "Quel délai de votre projet",
		inputType: "select",
		selectValues: ["D'ici 3 mois", "3 à 6 mois", "Plus de 6 mois"],
	},
	{
		inputName: "name",
		question: "Votre nom",
		inputType: "text",
	},
	{
		inputName: "genre",
		question: "Civilité",
		inputType: "select",
		selectValues: ["Madame", "Monsieur"],
	},
	{
		inputName: "phone",
		question: "Téléphone",
		inputType: "text",
	},
	{
		inputName: "email",
		question: "Email",
		inputType: "text",
	},
];

export default stepsData;
