
import { useParams } from 'react-router';
import useContent from '../../hooks/useContent';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const {contents} = useContent('/service.json');
    const singleService = contents.find(content => content.id === parseInt(serviceId));
    return (
        <div>
            <img className="w-100 mb-5" src={singleService?.banner} alt="" />
            <div className="w-50 mx-auto text-center">
                <h2 className="my-5 text-dark">{singleService?.name}</h2>
                <p className="text-dark my-5">{singleService?.desc}</p>
                <img className="my-5" src={singleService?.img} alt="" />
                <p className="my-5 text-dark">{singleService?.details}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;