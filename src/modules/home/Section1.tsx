import React, { useEffect, useState } from 'react'

import onlineShoppingAnimationData from '../../lottie/online-shopping-delivery.json'
import groupeTontineAnimationData from '../../lottie/group-tontine.json'

import Lottie from "react-lottie"
import NourSection from '../../components/core/NourSection'
import Modal from './components/Modal'
import NourModal from '../../components/core/NourModal'



export default function Section1() {

	const [state, setState] = useState({ mounted: false, currentInfo: 0, showModal: false })

	useEffect(() => {
		setState((state) => ({ ...state, mounted: true }))
		return () => {
			setState((state) => ({ ...state, mounted: false }))
		}
	}, [])

	if (!state.mounted) return

	const defaultOptions = (animationData) => ({
		loop: false,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	});

	const info = INFOS[state.currentInfo];

	function moveNext() {
		setState((state) => ({ ...state, currentInfo: state.currentInfo === INFOS.length ? 0 : state.currentInfo++ }))
	}

	function movePrev() {
		setState((state) => ({ ...state, currentInfo: state.currentInfo === -1 ? INFOS.length - 1 : state.currentInfo-- }))
	}

	function openModal() {
		setState((state) => ({ ...state, showModal: true }))
	}

	function closeModal(e) {
		if (e?.target.className == "modal__body") return
		setState((state) => ({ ...state, showModal: false }))
	}


	return (
		<NourSection className="home section1">
			<div className='home__caroussel' style={{ zIndex: state.showModal ? -1 : 0 }}>
				<button className='arrow' onClick={movePrev} />
				<div className='info'>
					<div className='info__content'>
						<h1 className='title'>{info.title}</h1>
						<p className='desc'>{info.desc}</p>
						<button className='btn btn-primary' onClick={openModal}>voir plus</button>
					</div>
					<div className='info__image'>
						{info.lottie && <Lottie
							options={defaultOptions(info.lottie)}
							height={300}
							width={300}
						/>}
					</div>
				</div>
				<button className='arrow' onClick={moveNext} />
			</div>
			{state.showModal && <NourModal closeModal={closeModal}/>}
		</NourSection>
	)
}


const INFOS = [
	// {
	// 	title: "MaTwi",
	// 	desc: "Nous mettons fin aux problèmes liés aux contrats informels et apportons une solution digitale de suivi de tout type d'engagement financier.",
	// 	lottie: null,
	// },
	{
		title: "Groupes-Tontines",
		desc: "Gerez facilement vos tontines collectives. Ce n'est plus du bouche-à-oreille! Découvrez tous les groupes et toutes les offres tontines. Adhérez et suivez aisément les tours.",
		lottie: groupeTontineAnimationData,
	},
	{
		title: "Tontines-Achats",
		desc: "Commandez en payant par tranches. Équipez-vous plus aisément en souscrivant aux offres en Tontine-Achat !",
		lottie: onlineShoppingAnimationData,
	},
];