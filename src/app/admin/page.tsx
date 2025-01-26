import LogoutForm from "@/ui/auth/logout-form";
import AddHotelForm from "@/ui/admin/add-hotel-form";

export default function Page() {
    return (
        <div>
            <h1>Admin Page</h1>
            <LogoutForm />
            <div>
                <h2>Add a hotel</h2>
                <AddHotelForm />
            </div>
        </div>
    )
}
