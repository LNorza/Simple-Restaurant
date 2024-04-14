import {CirclePlus} from "lucide-react";
import "./add-button.css";

export function AddButton({message}) {
	return (
		<div>
			<button className="add-button">
				<CirclePlus size={20} />
				{message}
			</button>
		</div>
	);
}
