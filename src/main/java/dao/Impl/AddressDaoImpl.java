package dao.Impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dao.AddressDao;
import model.AddressBean;

@Repository
public class AddressDaoImpl implements AddressDao {

	SessionFactory factory;
	
	@Autowired
	public AddressDaoImpl(SessionFactory factory) {
		this.factory = factory;
	}
	
	@Override
	public void deleteAddress(int mId, int aId) {
		Session session = factory.getCurrentSession();
		AddressBean address = new AddressBean();
		address.setmId(mId);
		address.setaId(aId);
		session.delete(address);
	}
}
