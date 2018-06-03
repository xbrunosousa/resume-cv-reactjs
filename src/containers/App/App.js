import React, { Component } from 'react'
import styles from './App.scss'
import { Container, Row, Col } from 'reactstrap'
import API from '../../services/api'
import Loading from '../loading/Loading'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Skills from './Skills'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cv: [],
		}
	}

	componentDidMount() {
		this.setState({ isLoading: true })
		fetch(`${API}`)
			.then(res => res.json())
			.then(res => {
				this.setState({
					cv: [res],
					isLoading: false,
				})
			})
	}

	render() { // Shows load screen if API data has not yet been loaded
		const { isLoading } = this.state
		if (isLoading) {
			return <Loading />
		}
		return ( // Render page
			<div>{this.renderList()}</div>
		)
	}

	renderList() {
		const page = this.state.cv.map((cv) => {
			return (
				<Container key={App}>
					<Row>
						{/* Left Column */}
						<Col md={{ offset: 1, size: 4 }} className={styles.leftColumn}>

							<div className={styles.avatar}>
								<img className={styles.avatarImg}
									src={cv.profile.image + '?raw=true'} alt="Avatar" /> {/* Add 'raw' parameter to github url */}
							</div>

							<p className={styles.name}>{cv.profile.name}</p>
							<p className={styles.profession}>{cv.profile.profession}</p>

							<div className={styles.lineLeft}></div>

							<p className={styles.profile}>Profile</p>

							<hr className={styles.hrLeft} />

							<p className={styles.descript}>{cv.profile.description + '.'}</p> {/* add end point */}

							<p className={styles.contact}>Contact</p>

							<hr className={styles.hrLeft} />

							<p className={styles.tel}>{cv.profile.contact.tel}</p>

							<p className={styles.cel}>{cv.profile.contact.cel}</p>

							<p className={styles.address}>{cv.profile.contact.address}</p>

							<p className={styles.website}>{cv.profile.contact.website}</p>

							<p className={styles.mail}>{cv.profile.contact.mail}</p>

							<p className={styles.skills}>Skills</p>

							<hr className={styles.hrLeft} />

							{
								cv.profile.skills.map((skill, key) => {
									return (
										<Skills key={key}
										name={skill.name}
										value={skill.value} />
									)
								})
							}

						</Col>
						{/* /Left Column */}

						{/* Right Column */}
						<Col md="6" className={styles.rightColumn}>

							<p className={styles.workExperience}>Work Experience</p>
							<hr className={styles.hrRight} />

							{
								cv.profile.experience.map((experience, key) => {
									return (
										<WorkExperience key={key}
										name={experience.name}
										date={experience.date}
										description={experience.description} />
									)
								})
							}

							<p className={styles.education}>EDUCATION</p>
							<hr className={styles.hrRight} />

							{
								cv.profile.education.map((education, key) => {
									return (
										<Education key={key}
											name={education.name}
											date={education.date}
											description={education.description} />
									)
								})
							}
						</Col>
						{/* /Right Column */}
					</Row>
				</Container>
			)
		})
		return page
	}
}

export default App