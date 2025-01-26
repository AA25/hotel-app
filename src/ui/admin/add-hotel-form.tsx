"use client";
import { useFormState } from "react-dom";
import { handleAddHotel } from "@/app/actions";

export default function AddHotelForm() {
    const [state, formAction] = useFormState(handleAddHotel, null)
    return (
        <form id="add-hotel-form" action={formAction}>
            <div className="mb-3">
                <label htmlFor={"hotelName"} className="form-label">Name</label>
                <input
                    id="hotelName"
                    className="form-control"
                    type="text"
                    name="hotelName"
                    placeholder="Enter Hotel name"
                    maxLength={100}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor={"hotelRating"} className="form-label">Rating</label>
                <input
                    id="hotelRating"
                    className="form-control"
                    type="number"
                    name="hotelRating"
                    placeholder="Enter Hotels rating"
                    min="1" max="5" defaultValue="5"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor={"hotelCity"} className="form-label">City</label>
                <select name="hotelCity" id="hotelCity" className="form-select" defaultValue="Sydney" required>
                    <option value="Sydney">Sydney</option>
                    <option value="London">London</option>
                    <option value="Paris">Paris</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor={"hotelPrice"} className="form-label">Price</label>
                <input
                    id="hotelPrice"
                    className="form-control"
                    type="number"
                    name="hotelPrice"
                    placeholder="0"
                    min="1" max="1000"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor={"hotelPhoto"} className="form-label">Upload Photo</label>
                <input
                    id="hotelPhoto"
                    className="form-control"
                    type="file"
                    name="hotelPhoto"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
