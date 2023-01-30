import { useEffect, useState } from "react";
import { ILead } from "../interfaces/ILead.interface";


export const useLead = () => {
    const [lead, setLead] = useState<ILead[]>([]);

    useEffect(() => {
        if(lead.length === 0){
            fetch(`http://brutadev.kinghost.net:21023/lead`)
                . then((response) => response.json())
                .then((data) => setLead(data))
        }
    }, [lead])

    return {
        lead
    }
}