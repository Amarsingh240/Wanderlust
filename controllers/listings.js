const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {

    const { location } = req.query;

    console.log("SEARCH LOCATION:", location);

    let allListings;

    if (location && location.trim() !== "") {
        allListings = await Listing.find({
            location: { $regex: location.trim(), $options: "i" }
        });
    } else {
        allListings = await Listing.find({});
    }

    console.log("FOUND LISTINGS:", allListings.length);
    console.log(allListings.map(listing => listing.location));

    res.render("listings/index.ejs", { allListings });

}
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    // console.log(listing);
    res.render("listings/show.ejs", { listing });
}
module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;
    let savelisting = await newListing.save();
    console.log(savelisting);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
}
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let updateListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        updateListing.image = { url, filename };
        await updateListing.save();
    }

    console.log(updateListing)
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);

}
module.exports.distroyListing = async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");

}