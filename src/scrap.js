// REACT
// 3RD PARTY LIBRARIES
// COMPONENTS
// CONTAINERS
// FIREBASE
// HELPERS
// RECOIL
// SERVICES
// ASSETS

// var a = document.createElement('a')
// a.href = canvas.toDataURL('image/png')
// a.download = 'myfile.png'
// a.click()

const downloadPDF = async () => {
	console.log('downloadPDF')
	const ResumeElement = document.getElementById('Resume')
	await html2canvas(ResumeElement).then((canvas) => {
		// console.log(canvas, [ResumeElement.clientWidth, ResumeElement.clientHeight])
		const imgData = canvas.toDataURL('image/png')
		const pdf = new jsPDF({
			orientation: ResumeElement.clientWidth > ResumeElement.clientHeight ? 'landscape' : 'portrait',
			unit: 'px',
			format: [ResumeElement.clientWidth, ResumeElement.clientHeight],
			putOnlyUsedFonts: true,
		})
		pdf.addImage(imgData, 'PNG', 0, 0, ResumeElement.clientWidth, ResumeElement.clientHeight)
		pdf.save('hello.pdf')
	})
}
