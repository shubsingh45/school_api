import School from "../modals/SchoolModal.js";
import calculateDistance from "../utils/Distance.js";

const AddSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(401).json({ message: "All fields are required" })
    }
    try {
        const school = await School.create({
            name,
            address,
            latitude,
            longitude
        })
        await school.save()
        return res.status(200).json({ message: "Success", school })

    } catch (error) {
        console.log(error.message)
        return res.status(402).json({ message: "Internal server error" })
    }
}


const ListOfSchool = async (req, res) => {
    const { userlatitude, userlongitude } = req.body;
    if (!userlatitude || !userlongitude) {
        return res.status(401).json({ message: "Please enter your currently latitude or longitude" })
    }
    try {
        const allSchools = await School.find();
        const nearestSchool = allSchools.map((school) => {
            const distanceOfSchool = calculateDistance (userlatitude, userlongitude, school.latitude, school.longitude)
            return { 
                id: school._id,
                name: school.name,
                address: school.address,
                latitude: school.latitude,
                longitude: school.longitude,
                distanceOfSchool: `${distanceOfSchool.toFixed(2)} km`
             }
        }).sort((a, b) => a.distanceOfSchool - b.distanceOfSchool)
        return res.status(403).json({ message: "success", nearestSchool })
    } catch (error) {
        console.log(error.message)
        return res.status(402).json({ message: "Failed to find school" })
    }

}

export {AddSchool, ListOfSchool}
