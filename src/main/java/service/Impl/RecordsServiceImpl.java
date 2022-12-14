package service.Impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.RecordsDao;
import model.OrderBean;
import service.RecordsService;

@Service
@Transactional
public class RecordsServiceImpl implements RecordsService {
	
//	@Autowired
	private RecordsDao recordsDao;

	public RecordsServiceImpl(RecordsDao recordsDao) {
		this.recordsDao = recordsDao;
	}

	@Override
	public List<OrderBean> findByMemberId(Integer mId) {
		List<OrderBean> list = recordsDao.findByMemberId(mId);
        return list;
	}

	@Override
	public List<OrderBean> findByHelperId(Integer mId) {
		List<OrderBean> list = recordsDao.findByHelperId(mId);
        return list;
	}
	
	
}
