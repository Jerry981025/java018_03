package service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.AddressDao;
import service.AddressService;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	AddressDao addressDao;
	
	@Autowired
	public AddressServiceImpl(AddressDao addressDao) {
		this.addressDao = addressDao;
	}

	@Override
	public void deleteAddress(int aId) {
		addressDao.deleteAddress(aId);
	}

	@Override
	public int saveAddress(Integer mId, String address) {
		return addressDao.saveAddress(mId, address);
	}
}
