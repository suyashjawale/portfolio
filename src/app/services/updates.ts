import { computed, Injectable, Signal, signal } from '@angular/core';
import { Highlights } from '../interfaces/highlight';

interface EventDetail {
	message: string;
	name: string;
	profile: string[];
}

interface EventMap {
	[key: string]: EventDetail[];
}

@Injectable({
	providedIn: 'root'
})
export class Updates {

	birthDay = signal<EventMap>({
		"1-10": [
			{
				"message": "Happy Birthday Akshay Bhau",
				"name": "Akshay Shedage Birthday",
				"profile": [
					"akshay_shedage.jpg"
				]
			}
		],
		"1-4": [
			{
				"message": "Happy Birthday Pratik Bhau",
				"name": "https://www.facebook.com/pratik.satpute.5602",
				"profile": []
			}
		],
		"10-12": [
			{
				"message": "Happy Birthday",
				"name": "Priti Bogawat",
				"profile": []
			},
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/pratik.devnal",
				"profile": [
					"pratik_devnal.jpg"
				]
			}
		],
		"10-6": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/kaushik.nayab.3",
				"profile": []
			}
		],
		"11-3": [
			{
				"message": "Happy Birthday Yash Bhau",
				"name": "https://www.facebook.com/yash.wadgaonkar.9",
				"profile": [
					"yash_wadgaonkar.jpg"
				]
			}
		],
		"11-4": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/eshan.kale.9",
				"profile": [
					"eshan_kale.jpg"
				]
			},
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/ajinkya.khaladkar.5",
				"profile": []
			}
		],
		"11-6": [
			{
				"message": "Mummy Daddy Wedding Anniversary",
				"name": "Mummy Daddy Wedding Anniversary",
				"profile": []
			}
		],
		"11-8": [
			{
				"message": "Happy Birthday Rohan Bhau",
				"name": "Rohan Dhumal Birthday",
				"profile": [
					"rohan_dhumal.jpg"
				]
			}
		],
		"12-12": [
			{
				"message": "Happy Birthday Bhau",
				"name": "https://www.facebook.com/utkarsh.kaklij.1",
				"profile": [
					"utkarsh_kaklij.jpg"
				]
			}
		],
		"12-3": [
			{
				"message": "Happy Birthday Bro",
				"name": "Ruturaj Kamble",
				"profile": [
					"ruturaj_kamble.jpg"
				]
			}
		],
		"12-6": [
			{
				"message": "Happy Birthday Bhau",
				"name": "https://www.facebook.com/atharva.zagade.50",
				"profile": [
					"atharva_zagade.jpg"
				]
			},
			{
				"message": "Happy Birthday Swanand Sheth",
				"name": "Swanand Shewale",
				"profile": [
					"swanand_shewale.jpg"
				]
			}
		],
		"13-1": [
			{
				"message": "Happy Birthday (Chongya 80)",
				"name": "https://www.facebook.com/suchet.shetty.1",
				"profile": [
					"suchet_shetty.jpg",
					"suchet_shetty.mp4"
				]
			}
		],
		"13-12": [
			{
				"message": "Happy Birthday Saket Sheth",
				"name": "https://www.facebook.com/saket.inamdar",
				"profile": [
					"saket_inamdar.jpg"
				]
			}
		],
		"14-2": [
			{
				"message": "Happy Birthday Sonu Tai",
				"name": "Sudarshani Jadhav Birthday ",
				"profile": []
			}
		],
		"14-8": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/ameya.gujar.3",
				"profile": [
					"ameya_gujar.jpg"
				]
			}
		],
		"15-1": [
			{
				"message": "Happy Birthday Bhau",
				"name": "https://www.facebook.com/linesh.patil.39",
				"profile": [
					"linesh_patil.jpg"
				]
			}
		],
		"15-10": [
			{
				"message": "Happy Birthday Suraj Sheth",
				"name": "https://www.facebook.com/suraj.kale.5220665",
				"profile": [
					"suraj_kale.jpg"
				]
			},
			{
				"message": "Happy Birthday Ajinath Bhau",
				"name": "https://www.facebook.com/ajinath.sarade.351",
				"profile": [
					"ajinath_sarde.jpg"
				]
			}
		],
		"15-11": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/varadendra.jahagirdar.7",
				"profile": [
					"vardendra_jahagirdar.jpg"
				]
			}
		],
		"15-2": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/akash.sawant.31337",
				"profile": [
					"akash_sawant.jpg"
				]
			}
		],
		"15-5": [
			{
				"message": "Happy Birthday Yashya Bhau",
				"name": "https://www.facebook.com/yash.khade.5205",
				"profile": [
					"yash_khade.jpg"
				]
			}
		],
		"15-6": [
			{
				"message": "Happy Birthday Aie",
				"name": "Aie Birthday",
				"profile": []
			}
		],
		"15-8": [
			{
				"message": "Happy Birthday Vikrant Sheth",
				"name": "https://www.facebook.com/vikrant.kurkute.9",
				"profile": [
					"vikrant_kurkute.jpg"
				]
			}
		],
		"16-4": [
			{
				"message": "Happy Birthday Sandesh Bhau. Jai Bhim",
				"name": "https://www.facebook.com/sandesh.shinde.1069",
				"profile": [
					"sandesh_shinde.jpg"
				]
			}
		],
		"16-7": [
			{
				"message": "Happy Birthday Navnath Anna (Bhavi Ratan Tata)",
				"name": "https://www.facebook.com/navnath.raut.102",
				"profile": [
					"navnath_raut.jpg"
				]
			}
		],
		"16-8": [
			{
				"message": "Happy Birthday Venky Sheth",
				"name": "https://www.facebook.com/venkatesh.shahane",
				"profile": [
					"venkatesh_shahane.jpg"
				]
			}
		],
		"17-2": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/satyaprakash.yadav.16503",
				"profile": [
					"satyaprakash_yadav.jpg"
				]
			}
		],
		"17-8": [
			{
				"message": "Happy Birthday Bhau",
				"name": "https://www.facebook.com/chetan.bhosle.71697",
				"profile": [
					"chetan_bhosale.jpg"
				]
			}
		],
		"17-9": [
			{
				"message": "Happy Birthday Samyak",
				"name": "Samyak dhammadip jadhav",
				"profile": []
			}
		],
		"18-12": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/snehalkumar.more",
				"profile": [
					"sk_more.jpg"
				]
			}
		],
		"18-6": [
			{
				"message": "Today is Mummy Birthday",
				"name": "Today is Mummy Birthday",
				"profile": []
			},
			{
				"message": "Happy Wedding Anniversary Aie-Dada",
				"name": "Aie-Dada Wedding Anniversary",
				"profile": []
			}
		],
		"19-1": [
			{
				"message": "Happy Birthday Bhakti",
				"name": "https://www.facebook.com/bhakti.khopade.96",
				"profile": []
			}
		],
		"19-3": [
			{
				"message": "Happy Birthday Nitesh Bro",
				"name": "Nitesh Pal",
				"profile": [
					"nitesh_pal.jpg"
				]
			}
		],
		"19-6": [
			{
				"message": "Happy Birthday Kunya Sheth",
				"name": "Kunal Rajput Bday",
				"profile": [
					"kunal_rajput.jpg"
				]
			}
		],
		"19-7": [
			{
				"message": "Happy Birthday Bro. ",
				"name": "Omkar Popale",
				"profile": [
					"omkar_popale.jpg"
				]
			}
		],
		"2-12": [
			{
				"message": "Happy Birthday Bro",
				"name": "Mayur Vijay Sawant",
				"profile": [
					"mayur_sawant.jpg"
				]
			}
		],
		"2-3": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/omkar.thombare.7374",
				"profile": [
					"omkar_thombare.jpg"
				]
			}
		],
		"20-3": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/onkar.satavos.3",
				"profile": [
					"omkar_satav.jpg"
				]
			}
		],
		"20-8": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/shaunak.ghatpande1",
				"profile": []
			}
		],
		"21-1": [
			{
				"message": "Happy Birthday Mama",
				"name": "https://www.facebook.com/vaibhav.kadale",
				"profile": []
			}
		],
		"21-9": [
			{
				"message": "Happy Birthday Kunal Sheth",
				"name": "https://www.facebook.com/kunal.dhumal.923",
				"profile": [
					"kunal_dhumal.jpg"
				]
			}
		],
		"22-4": [
			{
				"message": "Happy Birthday Anna",
				"name": "https://www.facebook.com/arun.poojari.9028",
				"profile": [
					"arun_poojari.jpg"
				]
			}
		],
		"22-6": [
			{
				"message": "Happy Birthday Dolls",
				"name": "Vaibhav mama Doll's Birthday",
				"profile": []
			}
		],
		"22-9": [
			{
				"message": "Happy Bday Demo",
				"name": "Demo Birthday",
				"profile": []
			},
			{
				"message": "Happy Bday Demo",
				"name": "Demo Birthday",
				"profile": [
					"model.jpg"
				]
			}
		],
		"23-11": [
			{
				"message": "Happy Birthday Mam",
				"name": "https://www.facebook.com/deshmukh.rasika",
				"profile": []
			}
		],
		"23-6": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/faisal.kazi.jr.71",
				"profile": [
					"faizal_kazi.jpg"
				]
			}
		],
		"23-9": [
			{
				"message": "Happy Birthday Sheth",
				"name": "https://www.facebook.com/gaurav.roy.35762",
				"profile": [
					"gaurav_roy.jpg"
				]
			},
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/omkar.pandit.142",
				"profile": []
			},
			{
				"message": "Happy Birthday",
				"name": "Dani Daniels",
				"profile": [
					"dani_daniels.jpg"
				]
			}
		],
		"24-9": [
			{
				"message": "Happy Birthday Bhau",
				"name": "Sohel Shaikh Birthday",
				"profile": [
					"sohel_shaikh.jpg"
				]
			}
		],
		"25-1": [
			{
				"message": "Happy Birthday Sheth",
				"name": "https://www.facebook.com/ajay.chavan.75436531",
				"profile": [
					"ajay_chavan.jpg"
				]
			}
		],
		"25-12": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/abhijeet.gore.3576",
				"profile": [
					"abhijeet_gore.jpg"
				]
			}
		],
		"25-4": [
			{
				"message": "Happy Birthday Meghraj",
				"name": "https://www.facebook.com/meghraj.reddy",
				"profile": [
					"meghraj_reddy.jpg"
				]
			}
		],
		"25-5": [
			{
				"message": "Happy Birthday Bhau",
				"name": "https://www.facebook.com/sanat.khare",
				"profile": []
			}
		],
		"25-7": [
			{
				"message": "Happy Birthday Archis Bro",
				"name": "https://www.facebook.com/archis.deshmukh.3",
				"profile": [
					"archis_deshmukh.jpg"
				]
			}
		],
		"25-8": [
			{
				"message": "Happy Birthday Abhya",
				"name": " Abhishek Pawar Bday ",
				"profile": [
					"abhishek_pawar.jpg"
				]
			}
		],
		"25-9": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/adarsh.prabhu.338",
				"profile": [
					"adarsh_prabhu.jpg"
				]
			},
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/pranavmahaamuni",
				"profile": [
					"pranav_mahamuni.jpg"
				]
			},
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/shubham.patel.7739814",
				"profile": []
			}
		],
		"26-1": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/kaustubh.pasalkar",
				"profile": []
			}
		],
		"26-4": [
			{
				"message": "Happy Birthday",
				"name": "https://www.facebook.com/sanjay.jawale.75",
				"profile": []
			}
		],
		"26-6": [
			{
				"message": "Happy Birthday kishan",
				"name": "https://www.facebook.com/kishan.gautam.5",
				"profile": [
					"kishan_gautam.jpg"
				]
			}
		],
		"27-1": [
			{
				"message": "Happy Birthday Shaligram",
				"name": "https://www.facebook.com/shaligram.vishwakarma.7",
				"profile": []
			}
		],
		"27-11": [
			{
				"message": "Happy Birthday Adwait Bhau",
				"name": "https://www.facebook.com/adwait.pade",
				"profile": [
					"advait_pade.jpg"
				]
			}
		],
		"27-2": [
			{
				"message": "Happy Birthday Dada",
				"name": "Dada Birthday",
				"profile": []
			}
		],
		"27-6": [
			{
				"message": "Happy Birthday Pappu",
				"name": "https://www.facebook.com/ashish.mhaskar.731",
				"profile": [
					"ashish_maskar.jpg"
				]
			}
		],
		"27-8": [
			{
				"message": "Happy Birthday Harshal Bro",
				"name": "https://www.facebook.com/harshal.pawar.54966",
				"profile": []
			}
		],
		"28-12": [
			{
				"message": "Happy Birthday Manjit OP",
				"name": "https://www.facebook.com/MANJIT.VIP",
				"profile": [
					"manjit_singh.jpg"
				]
			}
		],
		"28-3": [
			{
				"message": "Happy Birthday Nehal Bhau",
				"name": "https://www.facebook.com/nehal.bhosle.1",
				"profile": [
					"nehal_bhosale.jpg"
				]
			}
		],
		"28-4": [
			{
				"message": "Happy Birthday Bhava",
				"name": "Rahul More Birthday",
				"profile": [
					"rahul_more.jpg"
				]
			},
			{
				"message": "Happy Birthday Bhava",
				"name": "Rahul Kadam Birthday",
				"profile": [
					"rahul_kadam.jpg"
				]
			}
		],
		"28-6": [
			{
				"message": "Happy Birthday",
				"name": "radha soman",
				"profile": [
					"radha_soman.jpg"
				]
			}
		],
		"28-7": [
			{
				"message": "Happy Birthday Bhava",
				"name": "Nihar Joshi Birthday ",
				"profile": [
					"nihar_joshi.jpg"
				]
			},
			{
				"message": "Happy Birthday Bhava",
				"name": "Shubham Latake Birthday",
				"profile": [
					"shubham_latake.jpg"
				]
			}
		],
		"28-8": [
			{
				"message": "Happy Birthday Bhava",
				"name": "sanket Lamkhade",
				"profile": [
					"sanket_lamkhade.jpg"
				]
			}
		],
		"29-8": [
			{
				"message": "Happy Birthday Kini",
				"name": "https://www.facebook.com/rahul.kini.3745",
				"profile": [
					"rahul_kini.jpg"
				]
			}
		],
		"29-9": [
			{
				"message": "Happy Birthday Yash Bhau",
				"name": "https://www.facebook.com/yash.pawar.948",
				"profile": []
			}
		],
		"3-11": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/amey.kirad",
				"profile": [
					"amey_kirad.jpg"
				]
			},
			{
				"message": "Happy Birthday Bro",
				"name": "Aniket Kakade",
				"profile": [
					"aniket_kakade.jpg"
				]
			}
		],
		"3-12": [
			{
				"message": "Happy Birthday Bro",
				"name": "Rohan Jadhav Birthday ",
				"profile": []
			}
		],
		"3-6": [
			{
				"message": "Happy Birthday",
				"name": "Prajakta Jahagirdar",
				"profile": []
			},
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/siddhanth.wani",
				"profile": [
					"siddhant_wani.jpg"
				]
			}
		],
		"3-9": [
			{
				"message": "Happy Birthday Tambe Bhau",
				"name": "https://www.facebook.com/krushna.tambe.376",
				"profile": [
					"krushna_tambe.jpg"
				]
			}
		],
		"30-6": [
			{
				"message": "Happy Birthday Mama",
				"name": "https://www.facebook.com/vishal.kadale.75",
				"profile": []
			}
		],
		"30-9": [
			{
				"message": "Happy Birthday Manali",
				"name": "https://www.facebook.com/manali.kulkarni.5836",
				"profile": []
			},
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/praful.bhalerao.169",
				"profile": [
					"praful_bhalerao.jpg"
				]
			}
		],
		"31-1": [
			{
				"message": "Happy Birthday Bhau",
				"name": "https://www.facebook.com/prashant.chaturvedi.50767",
				"profile": [
					"prashant_chaturvedi.jpg"
				]
			}
		],
		"31-12": [
			{
				"message": "Happy Birthday Bro",
				"name": "Vishnu Suthar",
				"profile": [
					"vishnu_suthar.jpg"
				]
			}
		],
		"31-8": [
			{
				"message": "Happy Birthday Lalit Sheth",
				"name": "https://www.facebook.com/lalit.dangi.3572",
				"profile": []
			}
		],
		"4-2": [
			{
				"message": "Happy Birthday Pranav",
				"name": "https://www.facebook.com/pranav.hinge4",
				"profile": [
					"pranav_hinge.jpg"
				]
			}
		],
		"4-6": [
			{
				"message": "Happy Birthday Bhau",
				"name": "https://www.facebook.com/praful.prajapati.33046",
				"profile": [
					"praful_prajapati.jpg"
				]
			}
		],
		"4-9": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/ashutosh.gorke",
				"profile": []
			}
		],
		"5-12": [
			{
				"message": "Happy Birthday Viraj",
				"name": "Viraj Birthday",
				"profile": []
			},
			{
				"message": "Happy Birthday Viraj",
				"name": "Viraj Birthday",
				"profile": []
			},
			{
				"message": "Happy Birthday Viraj",
				"name": "Viraj Birthday",
				"profile": []
			}
		],
		"5-3": [
			{
				"message": "Happy Birthday",
				"name": "Mayur Kamble",
				"profile": []
			}
		],
		"5-4": [
			{
				"message": "Happy Birthday",
				"name": "Rashmika Bday",
				"profile": []
			}
		],
		"5-9": [
			{
				"message": "Happy Birthday Adarsh",
				"name": "Pillya (Adarsh Navnath Yedage)",
				"profile": [
					"adarsh_yedage.jpg"
				]
			},
			{
				"message": "Happy Birthday Adarsh",
				"name": "Pillya (Adarsh Navnath Yedage)",
				"profile": []
			}
		],
		"6-12": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/nikhil.pawankar.99",
				"profile": []
			}
		],
		"6-6": [
			{
				"message": "Happy Birthday Sudeep",
				"name": "https://www.facebook.com/sudeep.wavare",
				"profile": []
			},
			{
				"message": "Happy Birthday Sam Bhau",
				"name": "https://www.facebook.com/sam.bhise.96",
				"profile": [
					"sam_bhise.jpg"
				]
			}
		],
		"6-7": [
			{
				"message": "Happy Birthday Hrushya",
				"name": "https://www.facebook.com/hrushikesh.yadav.378",
				"profile": [
					"hrushikesh_yadav.jpg"
				]
			}
		],
		"7-3": [
			{
				"message": "Happy Birthday Sanchit",
				"name": "sanchit",
				"profile": [
					"sanchit_khedkar.jpg"
				]
			}
		],
		"7-7": [
			{
				"message": "Happy Birthday Rohan Sheth",
				"name": "https://www.facebook.com/rohan.sardar.37",
				"profile": [
					"rohan_sardar.jpg"
				]
			}
		],
		"8-1": [
			{
				"message": "Happy Birthday Bhava",
				"name": "Shubham Yadav",
				"profile": [
					"shubham_yadav.jpg"
				]
			}
		],
		"8-11": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/rhishikesh.bhoite.1",
				"profile": [
					"rushikesh_bhoite.jpg"
				]
			}
		],
		"8-3": [
			{
				"message": "Happy Birthday Brother",
				"name": "https://www.facebook.com/sahil.jawalekar.92",
				"profile": [
					"sahil_jawalekar.jpg"
				]
			}
		],
		"8-6": [
			{
				"message": "Happy Birthday Ajay Gole",
				"name": "https://www.facebook.com/ajay.survase.332",
				"profile": [
					"ajay_survase.jpg"
				]
			}
		],
		"9-11": [
			{
				"message": "Happy Birthday Bhava",
				"name": "https://www.facebook.com/ramkrishna.karale.1433",
				"profile": [
					"ramkrishna_karale.jpg"
				]
			}
		],
		"9-2": [
			{
				"message": "Happy Birthday Bro",
				"name": "https://www.facebook.com/nachiket.shende.3",
				"profile": []
			}
		],
		"9-3": [
			{
				"message": "Happy Birthday Ajay Preeti Shinde",
				"name": "Ajay Shinde Birthday",
				"profile": [
					"ajay_shinde.jpg"
				]
			}
		],
		"9-7": [
			{
				"message": "Happy Birthday Darshan Bhau",
				"name": "https://www.facebook.com/darshan.gokule",
				"profile": []
			}
		],
		"9-9": [
			{
				"message": "Happy Birthday",
				"name": "https://www.facebook.com/aarti.bande.52",
				"profile": []
			}
		],
		"11-10": [
			{
				"message": "Happy Birthday Rutuja",
				"name": "Rutuja Pujare",
				profile: []
			}],
	})

	private getTodayKey(): string {
		const today = new Date();
		return `${today.getDate()}-${today.getMonth() + 1}`;
	}

	public todaysBirthdayHighlights: Signal<Highlights[]> = computed(() => {
		const todayKey = this.getTodayKey();
		const allEvents = this.birthDay();
		const todaysEvents = allEvents[todayKey] || [];

		return todaysEvents.map((obj) => ({
			hasImage: obj.name,
			content: obj.message
		} as unknown as Highlights));
	});
}
